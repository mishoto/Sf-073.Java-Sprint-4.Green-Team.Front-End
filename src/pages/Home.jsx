import React, { useContext } from "react";
import img1 from "../images/georgiT.jpg";
import img2 from "../images/misho.jpg";
import img3 from "../images/silviya.jpg";
import img4 from "../images/georgivase.jpg";

const Home = () => {
  return (
    <div>
      <h1>Anti-Fraud System By:</h1>
        <div className="team-presentation">
          <div className="member">
            <img src={img1} alt="Member 1" />
            <h3>Georgi Tangardzhiev</h3>
            <p>Position: Trainee</p>
            <p>Skills: Java, Spring, HTML&CSS</p>
          </div>
          <div className="member">
            <img src={img2} alt="Member 2" />
            <h3>Mihail Mihailov</h3>
            <p>Position: Trainee</p>
            <p>Skills: Java, Spring, JavaScript</p>
          </div>
          <div className="member">
            <img src={img3} alt="Member 3" />
            <h3>Silviya Yankova</h3>
            <p>Position: Trainee</p>
            <p>Skills: Java, Spring, JavaScript</p>
          </div>
          <div className="member">
            <img src={img4} alt="Member 4" />
            <h3>
              Georgi <br />
              Vasev
            </h3>
            <p>Position: Trainee</p>
            <p>Skills: Java, Spring</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
