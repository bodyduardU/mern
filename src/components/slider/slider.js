import "./slider.css"

import SlideImage1 from "../../assets/sliderImages/slider-image1.png";
import SlideImage2 from "../../assets/sliderImages/slider-image2.png";
import SlideImage3 from "../../assets/sliderImages/slider-image3.png";
import SlideImage4 from "../../assets/sliderImages/slider-image4.jpg";
import SlideImage5 from "../../assets/sliderImages/slider-image5.png";


export default function Slider() {
    // prevents from refreshing the react page like '#' in HTML
    let handleClick = e => e.preventDefault();

    return(
        <div>

            <div className="row" style={{width: 0, height: 5}}> &nbsp; </div>

            <div className="carousel slideShow slide" data-ride="carousel" id="Project_SlideShow">
                <div className="container">
                    <ol className="carousel-indicators">
                        <li data-slide-to="0" data-target="#Project_SlideShow" className="active"></li>
                        <li data-slide-to="1" data-target="#Project_SlideShow" className=""></li>
                        <li data-slide-to="2" data-target="#Project_SlideShow" className=""></li>
                        <li data-slide-to="3" data-target="#Project_SlideShow" className=""></li>
                        <li data-slide-to="4" data-target="#Project_SlideShow" className=""></li>
                    </ol>
                    <div className="carousel-inner slideShow">
                        <div className="carousel-item slideShow active">
                            <div className="container">
                                <div className="pt-4"> &nbsp; </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 order-first order-lg-last">
                                        <img role="presentation" src={SlideImage1} alt="SlideImage1" style={{width: 220, height: 300}} />
                                    </div>
                                    <div className="col-md-12 col-lg-4 order-last order-lg-first">
                                        <a href="https://www.jenkins.io/blog/2021/04/07/contributhon-participants/">
                                            <h2>SheCodeAfrica Contributhon</h2>
                                            <p>The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi</p>
                                        </a>
                                        <div>
                                            <a className="btn btn-primary float-left" href="https://www.jenkins.io/blog/2021/03/19/SheCodeAfrica-announcement/">
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4"> &nbsp; </div>
                            </div>
                        </div>
                        <div className="carousel-item slideShow">
                            <div className="container">
                                <div className="pt-4"> &nbsp; </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 order-first order-lg-last">
                                        <img role="presentation" src={SlideImage2} alt="SlideImage2" style={{width: 240, height: 300}} />
                                    </div>
                                    <div className="col-md-12 col-lg-4 order-last order-lg-first">
                                        <a href="/" onClick={handleClick}>
                                            <h2>GSoC 2021: Call for student proposals</h2>
                                            <p>Jenkins project will be a mentoring organization in Google Summer of Code 2021. We are looking for students and mentors, join us! Applications close on April 13.</p>
                                        </a>
                                        <div>
                                            <a className="btn btn-primary float-left" href="/" onClick={handleClick}>
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4"> &nbsp; </div>
                            </div>
                        </div>
                        <div className="carousel-item slideShow">
                            <div className="container">
                                <div className="pt-4"> &nbsp; </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 order-first order-lg-last">
                                        <img role="presentation" src={SlideImage3} alt="SlideImage3" style={{width: 200, height: 300}} />
                                    </div>
                                    <div className="col-md-12 col-lg-4 order-last order-lg-first">
                                        <a href="https://jenkinsistheway.io/">
                                            <h2>Jenkins is the Way!</h2>
                                            <p>We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying, and automating great software with Jenkins. Check out their user stories and share yours</p>
                                        </a>
                                        <div>
                                            <a className="btn btn-primary float-left" href="https://jenkinsistheway.io/">
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4"> &nbsp; </div>
                            </div>
                        </div>
                        <div className="carousel-item slideShow">
                            <div className="container">
                                <div className="pt-4"> &nbsp; </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 order-first order-lg-last">
                                        <img role="presentation" src={SlideImage4} alt="SlideImage4" style={{width: 580, height: 300}} />
                                    </div>
                                    <div className="col-md-12 col-lg-4 order-last order-lg-first">
                                        <a href="https://events.linuxfoundation.org/cdcon/">
                                            <h2>cdCon</h2>
                                            <p>Join Jenkins at cdCon on June 22-25, 2021! The event is focused on improving the world's capacity to deliver software with security and speed. Become part of the conversation that drives continuous delivery by meeting peers, sharing ideas and talking to industry leaders on all things software delivery and DevOps.</p>
                                        </a>
                                        <div>
                                            <a className="btn btn-primary float-left" href="https://events.linuxfoundation.org/cdcon/register/">
                                                Register for cdCon
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4"> &nbsp; </div>
                            </div>
                        </div>
                        <div className="carousel-item slideShow">
                            <div className="container">
                                <div className="pt-4"> &nbsp; </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 order-first order-lg-last">
                                        <img role="presentation" src={SlideImage5} alt="SlideImage5" style={{width: 210, height: 300}} />
                                    </div>
                                    <div className="col-md-12 col-lg-4 order-last order-lg-first">
                                        <a href="https://www.jenkins.io/participate/">
                                            <h2>Participate and Contribute!</h2>
                                            <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                                        </a>
                                        <div>
                                            <a className="btn btn-primary float-left" href="https://www.jenkins.io/participate/">
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4"> &nbsp; </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}