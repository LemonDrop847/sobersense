import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import AudioRecorder from "../components/AudioStuff";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
export default function Upload() {
  const navigate = useNavigate();
  const [picture, setPicture] = useState("");

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  const [recordingStatus, setRecordingStatus] = useState("Off");
  const [recordedBlob, setRecordedBlob] = useState(null);

  const [phrase, setPhrase] = useState("");

  const getPhrase = async () => {
    try {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "ngrok-skip-browser-warning": true,
      };
      const response = await fetch(
        "https://optimal-oyster-central.ngrok-free.app/getPhrase",
        {
          method: "GET",
          headers: headersList,
        }
      );
      let data = await response.json();
      setPhrase(data.phrase);
    } catch (err) {
      console.log("Error " + err.message);
    }
  };
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };
  const handleSubmit = async () => {
    if (picture && recordedBlob) {
      try {
        const imageBlob = dataURItoBlob(picture);
        const imageFile = new File([imageBlob], "image.jpg");
        const formData = new FormData();
        formData.append("image", imageFile);

        const formData2 = new FormData();
        formData2.append("phrase", phrase);
        formData2.append("file", recordedBlob, "recording.wav");

        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "ngrok-skip-browser-warning": true,
        };
        const r1 = await fetch(
          "https://optimal-oyster-central.ngrok-free.app/image",
          {
            method: "POST",
            headers: headersList,
            body: formData,
          }
        );
        const r2 = await fetch(
          "https://optimal-oyster-central.ngrok-free.app/checkVoice",
          {
            method: "POST",
            headers: headersList,
            body: formData2,
          }
        );

        if (r1.status === 200 && r2.status === 200) {
          if (r2.json().is_slurring == "true" && r1.json().prediction == "true")
            navigate("/upload/drunk");
          else navigate("/upload/sober");
        } else {
          console.error("Submission failed.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
      }
    } else {
      console.error("Please capture both image and audio before submitting.");
      console.log(recordedBlob);
    }
  };

  return (
    <div
      style={{
        marginBottom: "100px",
      }}
    >
      <h2 className="mb-5 text-center">Check for drunk or not?</h2>
      <div className="row">
        <div className="col mx-10 w-50" style={{ marginLeft: "100px" }}>
          <div>
            {picture === "" ? (
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            ) : (
              <img style={{ maxWidth: "400px" }} src={picture} alt="Captured" />
            )}
          </div>
          <div>
            {picture !== "" ? (
              <button
                onClick={() => setPicture("")}
                className="btn btn-primary"
              >
                Retake
              </button>
            ) : (
              <button onClick={capture} className="btn btn-danger">
                Capture
              </button>
            )}
          </div>
        </div>
        <div className="col w-50" style={{ marginRight: "50px" }}>
          <div className="row">
            <h2 style={{ paddingTop: "20px" }}>Text to read</h2>
            {phrase === "" ? (
              <div>
                <h3>Click to get a Phrase</h3>
                <button onClick={getPhrase}>Get A Phrase</button>
              </div>
            ) : (
              <p>{phrase}</p>
            )}
          </div>
          <div className="row">
            <div style={{ width: "700px", height: "350px" }}>
              <AudioRecorder
                setRecordedBlob={setRecordedBlob}
                setRecordingStatus={setRecordingStatus}
              />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
