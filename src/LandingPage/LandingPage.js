import React from 'react';
import './LandingPage.css';
import HomeComponent from '../HomeComponent/Homecomponent';
import Experience from '../Experience/Experience';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function LandingPage() {

    return (
        <div className='LandingPageContainer'>
            <div className='Header'>
                <ul>
                    <li><a href="#HomeComponent">Home</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#AboutMe">About Me</a></li>
                </ul>
            </div>
            <div id="HomeComponent">
                <HomeComponent />
            </div>
            <div id="Experience">
                <Experience />
            </div>
            <div id="AboutMe">
                <AboutMe />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;