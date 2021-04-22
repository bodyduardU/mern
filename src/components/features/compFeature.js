import IndividualFeature from "./individualFeature";
import "./feature.css";

export default function TotalFeatures() {
    return(
        <div>

            <div>
                <div className="row" style={{width: 0, height: 50}}> &nbsp; </div>
                <div className="container">
                    <div className="row uniform-height">
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-shuffle"></i>
                                <IndividualFeature title="Continuous Integration and Continuous Delivery" parag="As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-download3"></i>
                                <IndividualFeature title="Easy installation" parag="Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-equalizer"></i>
                                <IndividualFeature title="Easy configuration" parag="Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-power-cord"></i>
                                <IndividualFeature title="Plugins" parag="With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-enlarge"></i>
                                <IndividualFeature title="Extensible" parag="Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <i className="icon-dice"></i>
                                <IndividualFeature title="Distributed" parag="Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}