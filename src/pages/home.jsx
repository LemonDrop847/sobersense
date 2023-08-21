import srusti from "../assets/srusti.jpg"
import about from "../assets/about.jpg"
import anil from "../assets/anil.jpeg"
import haha from "../assets/haha.jpg"
import soyam from "../assets/soyam-pic.jpg"
import nitin from "../assets/nitin.jfif"
import three from "../assets/3.png"
export default function Home() {
  return <>
    <div id="heroSlider" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

            <div class="carousel-item text-center bg-cover vh-100 active slide-1">
                <div class="container h-100 d-flex align-items-center justify-content-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h6 class="text-white">SoberSense.ai</h6>
                            <h1 class="display-1 my-3 fw-bold text-white">Your Shield Against Drunk Driving</h1>
                            <a href="#" class="btn btn-brand">Get started</a>
                        </div>
                    </div>
                </div>
            </div>

             <div class="carousel-item text-center bg-cover vh-100 slide-2">
                <div class="container h-100 d-flex align-items-center justify-content-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h6 class="text-white">SoberSense.ai</h6>
                            <h1 class="display-1 my-3 fw-bold text-white">Innovating Roadway Vigilance</h1>
                            <a href="#" class="btn btn-brand">Get started</a>
                        </div>
                    </div>
                </div>
            </div> 


        </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> 
    </div>

    <section id="about">
        <div class="container">
            <div class="row gy-4 align-items-center">
                <div class="col-lg-5">
                    <img src={about}/>
                </div>
                <div class="col-lg-7">
                    <h1>About us</h1>
                    <div class="divider my-4"></div>
                    <p>At SoberSense.ai , we're on a mission to transform road safety through technology. Our focus is clear: preventing accidents caused by impaired driving to ensure safer roads for all.</p>
                    <p>Our story began with a powerful idea – using technology to minimize the risks of drunk driving. Guided by experts in tech and road safety, we've harnessed advanced algorithms for real-time impairment detection. Our solution promotes responsible driving, empowering both individuals and law enforcement agencies to make life-saving choices.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="team">
        <div class="container">
            <div class="row">
                <div class="col-12 intro-text">
                    <h1>The Team</h1>
                    <p>Empowering Change: Our Team of Trailblazers</p>
                </div>
            </div>
            <div class="row gy-4">
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member px-4 py-5 border shadow-on-hover text-center">
                        <img src={nitin}/>
                        <div class="team-member-content">
                            <h4 class="mb-0 mt-4">Nitin Mishra</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member px-4 py-5 border shadow-on-hover text-center">
                        <img src={soyam}/>
                        <div class="team-member-content">
                            <h4 class="mb-0 mt-4">Soyam Prabha Mallick</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member px-4 py-5 border shadow-on-hover text-center">
                        <img src={srusti}/>
                        <div class="team-member-content">
                            <h4 class="mb-0 mt-4">Srusti S. Prusty</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member px-4 py-5 border shadow-on-hover text-center">
                        <img src={anil}/>
                        <div class="team-member-content">
                            <h4 class="mb-0 mt-4">Anil Kumar Behera</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>;
}
