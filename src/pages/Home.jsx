import React, {useContext} from "react";
import img1 from "../images/georgiT.jpg";
import img2 from "../images/misho.jpg";
import img3 from "../images/silviya.jpg";
import img4 from "../images/georgivase.jpg";

const Home = () => {

    function openLinkedIn(event) {
        event.preventDefault();
        window.open('https://www.linkedin.com/in/georgi-tangardzhiev-3b0327131/', '_blank');
        window.open('https://www.linkedin.com/in/silviya-yankova-0647b722a/', '_blank');
        window.open('https://www.linkedin.com/in/mihail-mihailov-101/', '_blank');
        window.open('https://www.linkedin.com/in/george-vasev-81026542/', '_blank');
    }

    function openGitHub(event) {
        event.preventDefault();
        window.open('https://github.com/GeorgiKyshenko', '_blank');
        window.open('https://github.com/SilviyaYankova', '_blank');
        window.open('https://github.com/mishoto', '_blank');
        window.open('https://github.com/GeorgiVasev', '_blank');
    }

    return (
        <div>

            <h1>Anti-Fraud System By:</h1>
            <div className="team-presentation">
                <div className="member">
                    <img src={img1} alt="Member 1"/>
                    <h3>Georgi Tangardzhiev</h3>
                    <p>Position: Trainee</p>
                    <p>Skills: Java, Spring, HTML&CSS</p>
                </div>
                <div className="member">
                    <img src={img2} alt="Member 2"/>
                    <h3>Mihail Mihailov</h3>
                    <p>Position: Trainee</p>
                    <p>Skills: Java, Spring, JavaScript</p>
                </div>
                <div className="member">
                    <img src={img3} alt="Member 3"/>
                    <h3>Silviya Yankova</h3>
                    <p>Position: Trainee</p>
                    <p>Skills: Java, Spring, JavaScript</p>
                </div>
                <div className="member">
                    <img src={img4} alt="Member 4"/>
                    <h3>
                        Georgi <br/>
                        Vasev
                    </h3>
                    <p>Position: Trainee</p>
                    <p>Skills: Java, Spring</p>
                </div>
            </div>
            <section className="social-media-section">
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <ul className="social-media">
                    <li><a href="#" onClick={openGitHub}><i
                        className="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="#" onClick={openLinkedIn}><i
                        className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
