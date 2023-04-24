import React from "react";
import './Homecomponent.css';
import profile from '../Utility/profile.jpg';
import AryaShreeMishra from '../Utility/AryaShreeMishra.pdf';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function HomeComponent() {
    return (
        <div className="HomeComponentContainer">
            <div className="FirstDiv">
                <div>
                    <h3 style={{ fontSize: "30px" }}>I am Frontend Developer</h3>
                    <h1 style={{ fontSize: "45px" }}>Arya Mishra</h1>
                </div>
                <div className="DetailsDiv">
                    <h5>Date of Birth: <p>Jan 24, 2000</p></h5>
                    <h5>Address: <p>Lucknow, India</p></h5>
                    <h5>E-mail: <p>aryamishra2401@gmail.com</p></h5>
                </div>
                <div className="buttonsDiv">
                    <a href={AryaShreeMishra} download="Arya Shree Mishra - Resume" target='_blank' rel="noreferrer">
                        <button className="ButtonDiv">Download CV</button>
                    </a>
                    <a href="https://www.linkedin.com/in/arya-shree-mishra-215805180/" target='_blank' rel="noreferrer">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>

            </div>
            <div className="SecondDiv">
                <img src={profile} alt="" style={{ height: "25vmax" }} />
            </div>
        </div>
    );
}

export default HomeComponent;