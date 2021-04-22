import "./banner.css";
import BannerImage from "../../assets/jenkins-logo.png";

export default function Banner() {
    return(
        <div>
            <div className="banner-container">
                {/* container Class creates equal margin on both left and right sides. Helpful in Responsiveness */}
                <div className="container">
                    <div className="row"> &nbsp; </div>
                    <div className="row">
                        <div className="col-md-1 col-lg-2"></div>
                        <div className="col-md-5 col-lg-4">
                            <div style={{width: 256}}>
                                <img src={BannerImage} style={{width:240, height:330}} alt="BannerImage" />
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <h1 className="ban-text"> <span>Jenkins</span> </h1>
                            <p className="ban-text"> <strong>Build great things at any scale</strong> </p>
                            <p className="ban-text">The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.</p>
                            <div className="container">
                                <div className="row">
                                    <a className="btn btn-secondary m-1" href="https://www.jenkins.io/doc/">Documentation</a>
                                    <a className="btn btn-primary m-1" href="https://www.jenkins.io/download/">Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-lg-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}