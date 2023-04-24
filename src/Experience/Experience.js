import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className='ExperienceContainer'>
            <div className='Experience'>
                <h2>Experience</h2>
                <p style={{padding: "0 10%"}}>I am an experienced React.JS developer with hands-on experience in
                    identifying web-based user interactions along with designing and
                    implementing highly responsive user interface components by deploying
                    React concepts.
                </p>
            </div>
            <div className='Section'>
                <div>
                    <p>November 2021 - Present</p>
                </div>
                <div>
                    <h3>Software Engineer</h3>
                    <div>
                        <ul>
                            <li><p>Created multiple robust, agile and efficient SharePoint websites
                                    using Typescript and React workflows.</p></li>
                            <li><p>Developed and integrated a real-time data update system that
                                    optimized the speed of data processing and updation.</p></li>
                            <li><p>Developed multiple scheduled as well as event triggered flows to
                                    automate the mailing system of the SharePoint site.</p></li>
                            <li><p>Developed the Frontend of multiple sites with almost 90%
                                compliance to the UI/UX design which has resulted in more that
                                80% client and customer satisfaction.</p></li>
                            <li><p>Integrated third-party tools and components into the React code
                                to optimize multiple functionalities.</p></li>
                            <li><p>Created multiple CI/CD pipelines for SharePoint sites and
                                deployed multiple SPFx webparts in the PROD site of SharePoint
                                using Azure DevOps.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Section'>
                <div>
                    <p>June 2021 - November 2021</p>
                </div>
                <div>
                    <h3>Software Engineer Trainee</h3>
                    <div>
                        <ul>
                            <li><p>Mindtree Orchard Learning Program in which I was trained as a
                                MERN stack developer and learned about JavaScript Frameworks.</p></li>
                            <li><p>Developed multiple Blog and Image sharing sites using MERN
                                technology and developed a good understanding of
                                HTTP/REST/API architecture.</p></li>
                            <li><p>Developed an E-commerce grocery shopping site using MERN
                                workflows such as MongoDB, Express, React, Node.JS and Redux
                                as a final project of the training program.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;