import "./sponsor.css";

import CloudBees from "../../assets/sponsorImages/cloudbees.png"
import OSUOSL from "../../assets/sponsorImages/osuosl.png"
import CDF from "../../assets/sponsorImages/cdf.png"
import RedHat from "../../assets/sponsorImages/redhat.png"
import AWS from "../../assets/sponsorImages/aws.png"
import GitHub from "../../assets/sponsorImages/github.png"
import JFrog from "../../assets/sponsorImages/jfrog.png"

export default function Affiliation() {
    return(
        <div id="sponsorsblock">
            <div className="sponsors">
                <p>
                    <strong>
                        We thank the following organizations for their major commitments to support the Jenkins project.
                    </strong>
                </p>
                <ul className="sponsorImages">
                    <li>
                        <a href="https://cloudbees.com" rel="noreferrer noopener" target="_blank">
                            <img className="sp1" alt="CloudBees, Inc." src={CloudBees} title="CloudBees, Inc." />
                        </a>
                    </li>
                    <li>
                        <a href="https://osuosl.org" rel="noreferrer noopener" target="_blank">
                            <img className="sp2" alt="Oregon State University Open Source Lab" src={OSUOSL} title="Oregon State University Open Source Lab" />
                        </a>
                    </li>
                    <li>
                        <a href="https://cd.foundation/" rel="noreferrer noopener" target="_blank">
                            <img className="sp3" alt="Continuous Delivery Foundation" src={CDF} title="Continuous Delivery Foundation" />
                        </a>
                    </li>
                    <li>
                        <a href="https://redhat.com" rel="noreferrer noopener" target="_blank">
                            <img className="sp4" alt="Red Hat, Inc." src={RedHat} title="Red Hat, Inc." />
                        </a>
                    </li>
                    <li>
                        <a href="https://aws.amazon.com/" rel="noreferrer noopener" target="_blank">
                            <img className="sp5" alt="AWS" src={AWS} title="AWS" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" rel="noreferrer noopener" target="_blank">
                            <img className="sp6" alt="GitHub, Inc." src={GitHub} title="GitHub, Inc." />
                        </a>
                    </li>
                    <li>
                        <a href="https://jfrog.com" rel="noreferrer noopener" target="_blank">
                            <img className="sp7" alt="JFrog" src={JFrog} title="JFrog" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="supporters">
                <p>
                    <strong>
                        We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
                    </strong>
                </p>
                <ul>
                    <li>
                        <a href="https://atlassian.com" rel="noreferrer noopener" target="_blank">Atlassian</a>
                    </li>
                    <li>
                        <a href="https://www.datadoghq.com" rel="noreferrer noopener" target="_blank">Datadog</a>
                    </li>
                    <li>
                        <a href="https://maccloud.me/" rel="noreferrer noopener" target="_blank">Mac Cloud</a>
                    </li>
                    <li>
                        <a href="https://pagerduty.com" rel="noreferrer noopener" target="_blank">PagerDuty</a>
                    </li>
                    <li>
                        <a href="https://sentry.io" rel="noreferrer noopener" target="_blank">Sentry</a>
                    </li>
                    <li>
                        <a href="https://xmission.com" rel="noreferrer noopener" target="_blank">XMission</a>
                    </li>
                    <li>
                        <a href="https://www.tsinghua.edu.cn" rel="noreferrer noopener" target="_blank">Tsinghua University</a>
                    </li>
                    <li>
                        <a href="https://www.fastly.com" rel="noreferrer noopener" target="_blank">Fastly</a>
                    </li>
                    <li>
                        <a href="https://spinup.com/" rel="noreferrer noopener" target="_blank">SpinUp</a>
                    </li>
                    <li>
                        <a href="https://www.ibm.com" rel="noreferrer noopener" target="_blank">IBM</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}