import "./blogPost.css";
import SinglePost from "./singlePost";

export default function BlogPost() {
    return (
        <div className="section blogs">
            <div className="container">
                <div className="row body">
                    <div className="col-md-1"></div>
                    <div className="col-md-10" id="content">
                        <div id="content-top"></div>
                        
                        <div className="block blog-posts">
                            <h3 className="title">
                                Recent Blog Posts
                            </h3>

                            <div className="content blog-posts">
                                <div className="item-list">
                                    <ul className="ji-blog-list ji-item-list">

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/04/15/jenkins-operator-sub-project/"
                                            month="Apr" day="15"
                                            title="Jenkins Operator becomes an official sub-project!"
                                            teaser="We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project. What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with..."
                                            link1="https://www.jenkins.io/blog/authors/antoniaklja" linkText1="Bartek Antoniak"
                                            comma=", "
                                            link2="https://www.jenkins.io/blog/authors/sylwiabrant" linkText2="Sylwia Brant"
                                            tagLink1="https://www.jenkins.io/node/tags/kubernetes/" tagLinkText1="kubernetes"
                                            tagLink2="https://www.jenkins.io/node/tags/operator/" tagLinkText2="operator"
                                            tagLink3="https://www.jenkins.io/node/tags/contributing/" tagLinkText3="contributing"
                                            tagLink4="https://www.jenkins.io/node/tags/announcement/" tagLinkText4="announcement"
                                        />

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/04/07/contributhon-participants/"
                                            month="Apr" day="07"
                                            title="Welcome the SheCodeAfrica Contributhon participants!"
                                            teaser="The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the..."
                                            link1="https://www.jenkins.io/blog/authors/markewaite" linkText1="Mark Waite"
                                            tagLink1="https://www.jenkins.io/node/tags/events/" tagLinkText1="events"
                                            tagLink2="https://www.jenkins.io/node/tags/community/" tagLinkText2="community"
                                            tagLink3="https://www.jenkins.io/node/tags/documentation/" tagLinkText3="documentation"
                                            tagLink4="https://www.jenkins.io/node/tags/outreach-programs/" tagLinkText4="outreach-programs"
                                            tagLink5="https://www.jenkins.io/node/tags/contributing/" tagLinkText5="contributing"
                                        />

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/03/22/governance-updates/"
                                            month="Mar" day="22"
                                            title="Welcome Ewelina Wilkosz - new Jenkins Governance Board member!"
                                            teaser="We would like to announce changes in the Jenkins Governance Board. As it was announced earlier this month, Marky Jackson has decided to step down from his elected roles. On behalf of the Jenkins community, we would like to thank Marky for all contributions and for the continued participation in the Jenkins community. As an active Jenkins contributor and community leader, Marky helped a lot of initiatives..."
                                            link1="https://www.jenkins.io/blog/authors/oleg_nenashev" linkText1="Oleg Nenashev"
                                            tagLink1="https://www.jenkins.io/node/tags/community/" tagLinkText1="community"
                                            tagLink2="https://www.jenkins.io/node/tags/governance/" tagLinkText2="governance"
                                            tagLink3="https://www.jenkins.io/node/tags/governance-board/" tagLinkText3="governance-board"
                                        />

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/03/19/SheCodeAfrica-announcement/"
                                            month="Mar" day="19"
                                            title="Jenkins accepted in SheCodeAfrica Contributhon"
                                            teaser="SheCodeAfrica is a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa. They provide resources and events that help women grow and achieve their personal and career goals. Their mentoring programs provide help and guidance as participants learn and grow in their careers. This year, SheCodeAfrica is organizing the SheCodeAfrica Contributhon. Contributhon is a boot camp where African women are paid to..."
                                            link1="https://www.jenkins.io/blog/authors/markewaite" linkText1="Mark Waite"
                                            tagLink1="https://www.jenkins.io/node/tags/events/" tagLinkText1="events"
                                            tagLink2="https://www.jenkins.io/node/tags/community/" tagLinkText2="community"
                                        />
                                        
                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/03/17/gsoc2021-announcement/"
                                            month="Mar" day="17"
                                            title="Jenkins accepted in Google Summer Of Code 2021!"
                                            teaser="On behalf of the Jenkins GSoC org team, I am happy to announce that this year, for the first time, the Jenkins projects will be participating in Google Summer of Code 2021 as part of the Continuous Delivery Foundation (CDF) GSoC organization. We’re very excited to have the Jenkins project participate in GSoC as part the CDF mentoring organisation along with fellow CDF projects such as Ortelius, Screwdriver, Spinnaker, and..."
                                            link1="https://www.jenkins.io/blog/authors/marckk" linkText1="Kara de la Marck"
                                            tagLink1="https://www.jenkins.io/node/tags/gsoc/" tagLinkText1="gsoc"
                                            tagLink2="https://www.jenkins.io/node/tags/gsoc2021/" tagLinkText2="gsoc2021"
                                            tagLink3="https://www.jenkins.io/node/tags/events/" tagLinkText3="events"
                                            tagLink4="https://www.jenkins.io/node/tags/community/" tagLinkText4="community"
                                        />
                                                                                
                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/03/15/update-center-certificate-rotation/"
                                            month="Mar" day="15"
                                            title="Update-Center certificate rotation"
                                            teaser="On the 29th of March 2021, we’ll rotate the Jenkins update center certificate. The existing certificate expires in April 2021. When the new certificate is installed on March 29, 2021, Jenkins versions older than 2.178 (April 2018), won’t be able to communicate with the default and experimental update centers. Instances using alternative update centers (self-hosted or vendor-provided) will not be affected by this change. Regarding plugins update, the..."
                                            link1="https://www.jenkins.io/blog/authors/olblak" linkText1="Olivier Vernin"
                                            tagLink1="https://www.jenkins.io/node/tags/announcement/" tagLinkText1="announcement"
                                            tagLink2="https://www.jenkins.io/node/tags/update-center/" tagLinkText2="update-center"
                                        />

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/02/17/cfp-cdcon/"
                                            month="Feb" day="17"
                                            title="cdCon 2021 - Call for Jenkins Proposals"
                                            teaser="Hear ye! Hear ye! Jenkins Community, cdCon 2021 (the Continuous Delivery Foundation’s annual flagship event) is happening June 23-24 and its call for papers is open! This is your chance to share what you’ve been doing with Jenkins. Are you building something cool? Using it to solve real-world problems? Are you making things fast? Secure? Or maybe you’re a contributor and want to share what’s new. In all cases, we want to..."
                                            link1="https://www.jenkins.io/blog/authors/cdfoundation" linkText1="Continuous Delivery Foundation"
                                            tagLink1="https://www.jenkins.io/node/tags/cdcon/" tagLinkText1="cdcon"
                                            tagLink2="https://www.jenkins.io/node/tags/cfp/" tagLinkText2="cfp"
                                            tagLink3="https://www.jenkins.io/node/tags/cicd/" tagLinkText3="cicd"
                                            tagLink4="https://www.jenkins.io/node/tags/continuous%20delivery/" tagLinkText4="continuous delivery"
                                        />
                                        
                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/02/16/contributor-summit-online/"
                                            month="Feb" day="16"
                                            title="Jenkins Contributor Summit Online Feb 23-25"
                                            teaser="The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project. We’re hosting an online summit this year to encourage contributors from around the world to meet, discuss, and plan for the future. The Contributor Summit will be Tuesday, February 23rd 2021 through Thursday, February 25, 2021. The summit brings together community members to learn, meet, and help shape the future of Jenkins. In the..."
                                            link1="https://www.jenkins.io/blog/authors/markewaite" linkText1="Mark Waite"
                                            tagLink1="https://www.jenkins.io/node/tags/community/" tagLinkText1="community"
                                            tagLink2="https://www.jenkins.io/node/tags/events/" tagLinkText2="events"
                                        />
                                                                                
                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/02/08/docker-base-os-upgrade/"
                                            month="Feb" day="08"
                                            title="Docker image updates"
                                            teaser="Beginning with Jenkins 2.279 and Jenkins 2.263.4, the Jenkins project is upgrading the base operating system and Java version used in the jenkins/jenkins:latest and jenkins/jenkins:lts images. The update replaces OpenJDK 8u242 with AdoptOpenJDK 8u282 and replaces Debian 9 ('Stretch') with Debian 10 ('Buster'). Why? We’re changing the base image so that we have a better supported operating system and a more current Java release for Jenkins controllers. Better..."
                                            link1="https://www.jenkins.io/blog/authors/markewaite" linkText1="Mark Waite"
                                            tagLink1="https://www.jenkins.io/node/tags/announcement/" tagLinkText1="announcement"
                                            tagLink2="https://www.jenkins.io/node/tags/docker/" tagLinkText2="docker"
                                            tagLink3="https://www.jenkins.io/node/tags/platform-sig/" tagLinkText3="platform-sig"
                                        />

                                        <SinglePost bodyLink="https://www.jenkins.io/blog/2021/01/26/new-ebook-build-deploy-and-automate-great-stuff-with-jenkins/"
                                            month="Jan" day="26"
                                            title="New eBook: Build, deploy, and automate great stuff with Jenkins"
                                            teaser="In April of last year, we launched a new Jenkins community website called JenkinsIsTheWay. The Jenkins Is The Way site has collected the experiences of Jenkins users around the world as they develop software and create solutions. They are charting new paths, discovering new opportunities, and overcoming challenges. That’s what makes Jenkins Is The Way tick. Engineers in the Netherlands might have already met challenges faced by developers..."
                                            link1="https://www.jenkins.io/blog/authors/alyssat" linkText1="Alyssa Tong"
                                            tagLink1="https://www.jenkins.io/node/tags/jenkins/" tagLinkText1="jenkins"
                                            tagLink2="https://www.jenkins.io/node/tags/jenkinsistheway/" tagLinkText2="jenkinsistheway"
                                            tagLink3="https://www.jenkins.io/node/tags/casestudies/" tagLinkText3="casestudies"
                                            tagLink4="https://www.jenkins.io/node/tags/Jenkinsuserstories/" tagLinkText4="jenkinsuserstories"
                                        />

                                   </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}