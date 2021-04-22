import "./footer.css";
import LicenseImage from "../../assets/license.png";

export default function Footer() {

    // const LicenseImage = "https://licensebuttons.net/l/by-sa/4.0/88x31.png";

    return(
        <div>

            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="box">
                                <a href="https://github.com/jenkins-infra/jenkins.io/edit/master/content//index.html.haml" title="Edit /index.html.haml on GitHub">
                                    Improve this page
                                </a>
                                &nbsp;|&nbsp;
                                <a href="https://github.com/jenkins-infra/jenkins.io/issues/new?labels=bug&amp;template=4-bug.md&amp;title=Jenkins page - TODO: Put a summary here&amp;body=Problem with the [Jenkins](https://www.jenkins.io/) page, [source file](https://github.com/jenkins-infra/jenkins.io/blob/master/content/index.html.haml)%0A%0ATODO: Describe the expected and actual behavior here %0A%0A%23%23 Screenshots %0A%0A TODO: Add screenshots if possible %0A%0A%23%23 Possible Solution %0A%0A%3C!-- If you have suggestions on a fix for the bug, please describe it here. --%3E %0A%0AN/A" title="Report a problem with /index.html.haml">
                                    Report a problem
                                </a>
                            </p>
                            <div class="license-box">
                                <div id="creativecommons">
                                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                                        <p>
                                            <img alt="Creative Commons Attribution-ShareAlike license" src={LicenseImage} />
                                        </p>
                                    </a>
                                    <p>
                                        The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="links col-md-8">
                            <div class="container">
                                <div class="row">
                                    <div class="area col-md-3">
                                        <div class="div-mar">
                                            <h5>Resources</h5>
                                            <ul class="resources">
                                                <li>
                                                    <a href="https://www.jenkins.io/download/">
                                                        Downloads
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/node/">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/doc/">
                                                        Documentation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://plugins.jenkins.io/">
                                                        Plugins
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/security/">
                                                        Security
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/participate/">
                                                        Contributing
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="area col-md-3">
                                        <div class="div-mar">
                                            <h5>Project</h5>
                                            <ul class="project">
                                                <li>
                                                    <a href="https://www.jenkins.io/project/">
                                                        Structure and governance
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://issues.jenkins.io/">
                                                        Issue tracker
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/project/roadmap/">
                                                        Roadmap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://github.com/jenkinsci">
                                                        GitHub
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://ci.jenkins.io">
                                                        Jenkins on Jenkins
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="area col-md-3">
                                        <div class="div-mar">
                                            <h5>Community</h5>
                                            <ul class="community">
                                                <li>
                                                    <a href="https://www.jenkins.io/events/">
                                                        Events
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/mailing-lists/">
                                                        Mailing lists
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/chat/">
                                                        Chats
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/sigs/">
                                                        Special Interest Groups
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/jenkinsci">
                                                        Twitter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://reddit.com/r/jenkinsci">
                                                        Reddit
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="area col-md-3">
                                        <div class="div-mar">
                                            <h5>Other</h5>
                                            <ul class="other">
                                                <li>
                                                    <a href="https://www.jenkins.io/conduct/">
                                                        Code of Conduct
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/press/">
                                                        Press information
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/merchandise/">
                                                        Merchandise
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/artwork/">
                                                        Artwork
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.jenkins.io/awards/">
                                                        Awards
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}