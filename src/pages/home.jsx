import srusti from "../assets/srusti.jpg";
import about from "../assets/about.jpg";
import anil from "../assets/anil.jpeg";
import haha from "../assets/haha.jpg";
import soyam from "../assets/soyam-pic.jpg";
import nitin from "../assets/nitin.jfif";
import three from "../assets/3.png";
import "./styles/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container-fluid home">
      <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item text-center bg-cover vh-100 active slide-1">
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h6 className="text-white">SoberSense.ai</h6>
                  <h1 className="display-1 my-3 fw-bold text-white">
                    Your Shield Against Drunk Driving
                  </h1>
                  <Link to="/upload" className="btn btn-brand">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-2">
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h6 className="text-white">SoberSense.ai</h6>
                  <h1 className="display-1 my-3 fw-bold text-white">
                    Innovating Roadway Vigilance
                  </h1>
                  <Link to="/upload" className="btn btn-brand">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id="about">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-5">
              <img src={about} />
            </div>
            <div className="col-lg-7">
              <h1>About us</h1>
              <div className="divider my-4"></div>
              <p>
                At SoberSense.ai , we're on a mission to transform road safety
                through technology. Our focus is clear: preventing accidents
                caused by impaired driving to ensure safer roads for all.
              </p>
              <p>
                Our story began with a powerful idea – using technology to
                minimize the risks of drunk driving. Guided by experts in tech
                and road safety, we've harnessed advanced algorithms for
                real-time impairment detection. Our solution promotes
                responsible driving, empowering both individuals and law
                enforcement agencies to make life-saving choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-12 intro-text">
              <h1>The Team</h1>
              <p>Empowering Change: Our Team of Trailblazers</p>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-3 col-sm-6">
              <div className="team-member px-4 py-5 border shadow-on-hover text-center">
                <img src={nitin} />
                <div className="team-member-content">
                  <h4 className="mb-0 mt-4">Nitin Mishra</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member px-4 py-5 border shadow-on-hover text-center">
                <img src={soyam} />
                <div className="team-member-content">
                  <h4 className="mb-0 mt-4">Soyam Prabha Mallick</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member px-4 py-5 border shadow-on-hover text-center">
                <img src={srusti} />
                <div className="team-member-content">
                  <h4 className="mb-0 mt-4">Srusti S. Prusty</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member px-4 py-5 border shadow-on-hover text-center">
                <img src={anil} />
                <div className="team-member-content">
                  <h4 className="mb-0 mt-4">Anil Kumar Behera</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
