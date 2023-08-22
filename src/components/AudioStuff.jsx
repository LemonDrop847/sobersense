import { Component } from "react";
import PropTypes from "prop-types";
import AudioAnalyser from "react-audio-analyser";

export default class AudioStuff extends Component {
  static propTypes = {
    setRecordingStatus: PropTypes.func.isRequired,
    setRecordedBlob: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      status: "inactive",
    };
  }

  controlAudio(status) {
    this.setState({
      status,
    });

    if (status === "recording") {
      this.props.setRecordingStatus("Recording");
    } else if (status === "inactive") {
      this.props.setRecordingStatus("Recorded");
    }
  }

  render() {
    const { status, audioSrc } = this.state;
    const audioProps = {
      audioType: "audio/wav",
      status,
      audioSrc,
      timeslice: 1000,
      startCallback: (e) => {
        console.log("succ start", e);
      },
      pauseCallback: (e) => {
        console.log("succ pause", e);
      },
      stopCallback: (e) => {
        this.setState({
          audioSrc: window.URL.createObjectURL(e),
        });
        console.log("succ stop", e);
        this.props.setRecordedBlob(e);
      },
      onRecordCallback: (e) => {
        console.log("recording", e);
      },
      errorCallback: (err) => {
        console.log("error", err);
      },
    };

    return (
      <div>
        <AudioAnalyser {...audioProps}>
          <div className="btn-box p-2">
            <button
              className="btn btn-warning m-2 "
              onClick={() => this.controlAudio("recording")}
            >
              Start
            </button>
            <button
              className="btn btn-warning m-2"
              onClick={() => this.controlAudio("paused")}
            >
              Pause
            </button>
            <button
              className="btn btn-warning m-2"
              onClick={() => this.controlAudio("inactive")}
            >
              Stop
            </button>
          </div>
        </AudioAnalyser>
      </div>
    );
  }
}
