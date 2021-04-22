import "./navbar.css";
import CD from "../../assets/cd.foundation-Logo.png";

function Navbar() {
    // prevents from refreshing the react page like '#' in HTML
    let handleClick = e => e.preventDefault();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark top bg-dark fixed-top mr-auto">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Jenkins</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between float-left" id="navbarSupportedContent">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle cd" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                <img src={CD} alt="cd.foundation" draggable="false" />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://cd.foundation/">What is CDF?</a></li>
                                <li><a className="dropdown-item" href="https://jenkins-x.io/">Jenkins X</a></li>
                                <li><a className="dropdown-item" href="https://cloud.google.com/tekton/">Tekton</a></li>
                                <li><a className="dropdown-item" href="https://www.spinnaker.io/">Spinnaker</a></li>
                            </ul>
                        </li>

                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.jenkins.io/node/">Blog</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  Documentation
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/"> <strong>User Guide</strong> </a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/installing/">- Installing Jenkins</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/pipeline/">- Jenkins Pipeline</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/managing/">- Managing Jenkins</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/system-administration/">- System Adminstartion</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/book/glossary/">- Terms and Definitions</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/solutions/"> <strong>Solution Pages</strong> </a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/tutorials/"> <strong>Tutorials</strong> </a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/pipeline/tour/getting-started/">- Guided Tour</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/tutorials/">- More Tutorials</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/doc/developer/"> <strong>Developer Guide</strong> </a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/participate/"> <strong>Contributor Guide</strong> </a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="https://plugins.jenkins.io/">Plugins</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  Community
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/participate/">Overview</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/chat/">Chat</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/jam/">Meet</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/events/">Events</a></li>
                                    <li><a className="dropdown-item" href="https://issues.jenkins.io/">Issue Tracker</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/mailing-lists/">Mailing Lists</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/project/roadmap/">Roadmap</a></li>
                                    <li><a className="dropdown-item" href="https://accounts.jenkins.io/">Account Management</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/"> <strong>Special Interest Groups</strong> </a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/advocacy-and-outreach/">- Advocacy and Outreach</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/chinese-localization/">- Chinese Localization</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/cloud-native/">- Cloud Native</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/docs/">- Documentation</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/gsoc/">- Google Summer of Code</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/hw-and-eda/">- Hardware and EDA</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/pipeline-authoring/">- Pipeline Authoring</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/platform/">- Platform</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/ux/">- User Experience</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  Subprojects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/">Overview</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/evergreen/">Evergreen</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/gsoc/">Google Summer of Code in Jenkins</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/infrastructure/">Infrastructure</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/jam/">CI/CD and Jenkins Area Meetups</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/jcasc/">Jenkins Configuration as Code</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/jenkins-operator/">Jenkins Operator</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/projects/remoting/">Jenkins Remoting</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/sigs/docs/gsod/2020/projects/document-jenkins-on-kubernetes/">Document Jenkins on Kubernetes</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  About
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/project/roadmap/">Roadmap</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/security/">Security</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/press/">Press</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/awards/">Awards</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/project/conduct/">Conduct</a></li>
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/artwork/">Artwork</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  English
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.jenkins.io/zh/">中文 Chinese</a></li>
                                </ul>
                            </li>

                            <a className="nav-link btn btn-outline-secondary" href="https://www.jenkins.io/download/">Download</a>

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </ul>
                    </div>
                </div>
            </nav>
            {/* It will fixed Navbar space and other elements after this, will take space below */}
            <div className="pt-4"> &nbsp; </div>
        </div>
    );
}

export default Navbar;