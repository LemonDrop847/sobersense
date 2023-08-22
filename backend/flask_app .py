from flask import Flask, request, jsonify
from flask_cors import CORS 
import cv2
import torch
import torchvision.transforms as transforms
import torch.nn as nn
from PIL import Image
import requests
import random
import speech_recognition as sr

app = Flask(__name__)
CORS(app)

def extract_face(image_path, face_cascade_path):
    face_cascade = cv2.CascadeClassifier(face_cascade_path)
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    if len(faces) > 0:
        x, y, w, h = faces[0]
        face = img[y:y+h, x:x+w]
        return face
    else:
        return None

def classify_drunk_or_sober(face_image_path, model, transform):
    img = Image.open(face_image_path).convert("RGB")
    img = transform(img).unsqueeze(0)

    model.eval()
    with torch.no_grad():
        outputs = model(img)
        _, predicted = torch.max(outputs, 1)
        
    class_labels = {1: "Drunk", 0: "Sober"}
    prediction = class_labels[predicted.item()]
    return prediction

class Classifier(nn.Module):
    def __init__(self, num_classes):
        super(Classifier, self).__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(3, 16, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2, stride=2),
        )
        self.fc_layers = nn.Sequential(
            nn.Linear(16 * 64 * 64, 128),
            nn.ReLU(),
            nn.Linear(128, num_classes)
        )

    def forward(self, x):
        x = self.conv_layers(x)
        x = x.view(x.size(0), -1)
        x = self.fc_layers(x)
        return x

model = Classifier(2)
model.load_state_dict(torch.load("classification_model.pth"))
model.eval()

cascade_path = "./haarcascade_frontalface_default.xml"

transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])
])

def deviation(s1, s2):
    m = len(s1) + 1
    n = len(s2) + 1
    dp = [[0] * n for i in range(m)]

    for i in range(m):
        dp[i][0] = i
    for j in range(n):
        dp[0][j] = j

    for i in range(1, m):
        for j in range(1, n):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1

    return dp[m - 1][n - 1]

def similarity(s1, s2):
    distance = deviation(s1, s2)
    max_len = max(len(s1), len(s2))
    return 1.0 - (distance / max_len)


def check_slurring(file_path, example):

    text = speech_to_text(file_path)
    similar_percent = similarity(text, example)

    return 1-similar_percent

def speech_to_text(file_path):
    r = sr.Recognizer()

    audio_file = sr.AudioFile(file_path)
    with audio_file as source:
        audio_text = r.record(source)
    # print(r.recognize_google(audio_text, language='en-US'))
    return r.recognize_google(audio_text, language='en-US')

@app.route("/image", methods=["POST"])
def classify_image():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image = request.files["image"]
    image_path = "uploaded_image.jpg"
    image.save(image_path)

    extracted_face = extract_face(image_path, cascade_path)

    if extracted_face is not None:
        extracted_face_path = "extracted_face.jpg"
        cv2.imwrite(extracted_face_path, extracted_face)

        prediction = classify_drunk_or_sober(extracted_face_path, model, transform)
        return jsonify({"prediction": prediction})
    else:
        return jsonify({"error": "No face detected in the input image"}), 400
    

@app.route("/getPhrase", methods=["GET"])
def get_random_phrase():
    words_url = "https://www.mit.edu/~ecprice/wordlist.10000"
    response = requests.get(words_url)
    all_words = response.text.splitlines()
    
    num_words_in_phrase = 7
    random_phrase_words = random.sample(all_words, num_words_in_phrase)
    random_phrase = ' '.join(random_phrase_words)
    
    return jsonify({"phrase": random_phrase})


@app.route("/checkVoice", methods=["POST"])
def check_voice_slurring():
    if "file" not in request.files or "phrase" not in request.form:
        return jsonify({"error": "Missing file or phrase"}), 400

    audio_file = request.files["file"]
    phrase = request.form["phrase"]
    
    audio_path = "audio.wav"
    audio_file.save(audio_path)

    slurring_percentage = check_slurring(audio_path, phrase)
    result = {
        # "slurring_percentage": slurring_percentage,
        "is_slurring": slurring_percentage > 0.5
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000,debug=True)
