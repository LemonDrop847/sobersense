import React, { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
export default function upload() {
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
  });
  console.log("url", mediaBlobUrl);
  return (
    <div>
      <h2 className="mb-5 text-center">
        Check for drunk or not?
      </h2>
      <div className="row">
        <div
          className=" col mx-10 w-50"
          style={{
            marginLeft: "100px",
          }}
        >
          <div>
            {picture == "" ? (
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            ) : (
              <img src={picture} />
            )}
          </div>
          <div>
            {picture != "" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPicture();
                }}
                className="btn btn-primary"
              >
                Retake
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  capture();
                }}
                className="btn btn-danger"
              >
                Capture
              </button>
            )}
          </div>
        </div>
        <div
          className="col w-50"
          style={{
            marginRight: "50px",
          }}
        >
          <div className="row">
            <h2>Text to read</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sunt earum corporis deleniti, ipsa porro minima sed vero. Neque
              quisquam exercitationem fugit inventore eligendi nemo sequi
              commodi beatae. Vero tempora, quam temporibus quia dolor explicabo
              dolores modi iusto sint dignissimos aut, repellendus libero! Eaque
              aperiam ipsum consectetur. Veniam, non obcaecati.
            </p>
          </div>
          <div className="row">
            <div
              style={{
                width: "700px",
                height: "350px",
              }}
            >
              <div
                style={{
                  border: "1px solid #bd9f61",
                  height: "70px",
                  backgroundColor: "#bd9f61",
                  display: "flex",
                }}
              >
                <h4
                  style={{
                    marginLeft: "10px",
                    textTransform: "capitalize",
                    fontFamily: "sans-serif",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  {status}
                </h4>
              </div>
              <div style={{ height: "38px" }}>
                {" "}
                <video src={mediaBlobUrl} controls loop />
              </div>

              <div
                className="col-md-6 col-md-offset-3"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "357px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "black",
                    borderRadius: "8px",
                    color: "white",
                  }}
                  onClick={stopTimer}
                >
                  Clear
                </button>
                <div style={{ marginLeft: "70px", fontSize: "54px" }}>
                  <span className="minute">{minute}</span>
                  <span>:</span>
                  <span className="second">{second}</span>
                </div>

                <div style={{ marginLeft: "20px", display: "flex" }}>
                  <label
                    style={{
                      fontSize: "15px",
                      fontWeight: "Normal",
                      // marginTop: "20px"
                    }}
                    htmlFor="icon-button-file"
                  >
                    <h3 style={{ marginLeft: "15px", fontWeight: "normal" }}>
                      Press the Start to record
                    </h3>

                    <div>
                      <button
                        style={{
                          padding: "0.8rem 2rem",
                          border: "none",
                          marginLeft: "15px",
                          fontSize: "1rem",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          backgroundColor: "#42b72a",
                          color: "white",
                          transition: "all 300ms ease-in-out",
                          transform: "translateY(0)",
                        }}
                        onClick={() => {
                          if (!isActive) {
                            startRecording();
                          } else {
                            pauseRecording();
                          }

                          setIsActive(!isActive);
                        }}
                      >
                        {isActive ? "Pause" : "Start"}
                      </button>
                      <button
                        style={{
                          padding: "0.8rem 2rem",
                          border: "none",
                          backgroundColor: "#df3636",
                          marginLeft: "15px",
                          fontSize: "1rem",
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          transition: "all 300ms ease-in-out",
                          transform: "translateY(0)",
                        }}
                        onClick={() => {
                          stopRecording();
                          pauseRecording();
                        }}
                      >
                        Stop
                      </button>
                    </div>
                  </label>
                </div>
                <b></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
