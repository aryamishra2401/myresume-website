import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='AboutMeContainer'>
            <div className='AboutMe'>
                <h3>About Me</h3>
                <p>An experienced React.JS Developer with hands-on experience in
                identifying web-based user interactions along with designing and implementing
                highly responsive user interface components by deploying React concepts.
                Proficient in translating designs & wireframes into high-quality code and
                writing application interface code via Javascript, ReactJS and Typescript
                workflows. Proficient in monitoring and maintaining frontend performance and
                troubleshooting & debugging the same to bolster overall performance.</p>
            </div>
            <div className='Skills'>
                <h3>Skills</h3>
                <div class="grid-container">
                    <div class="grid-item">React.JS</div>
                    <div class="grid-item">Typescript</div>
                    <div class="grid-item">Node.JS</div> 
                    <div class="grid-item">HTML</div>
                    <div class="grid-item">CSS</div>
                    <div class="grid-item">JavaScript</div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;