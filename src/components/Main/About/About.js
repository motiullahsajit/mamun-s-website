import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const expertise = ["Social media marketing", "Advertising", "SEO", "Google Adsense"];
const comfortables = ["Node.js", "Express.js", "MongoDB", "Firebase", "Heroku", "Netlify"];
const familiars = ["Redux", "Material-UI", "SCSS", "React Native"];
const tools = ["Ms Word", "Ms Excel", "Adobe Photoshop", "Canva"];

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section data-aos="zoom-in" id='about' className='container-fuild my-5 container-fluid-bg'>
            <div className="container d-flex justify-content-center">
                <div className="row p-3 align-items-center bg-white">
                    <div className="col-md-5 my-3">
                        <h4 className='color-brand'>Hello there, I’m Irfan Mamun,</h4>
                        <p>An Entrepreneur, an SEO expert, Local SEO, and SEO trainer, Freelancing Workshop Mentor, and Affiliate Marketer. I’m specialized in white hat SEO techniques. I’m a master of Social Media Marketing, keyword research, link building on-page, and off-page optimization, content marketing, Google Search Console & Analytics, and advanced SEO strategies. Currently, I’m working in CV Linked Training as a Trainer of SEO & also working in Skill Hunt as a Trainer of WordPress Web Development & SEO. </p>
                        <a className='btn btn-danger' href="https://drive.google.com/uc?export=download&amp;id=1t2Zfmo1eCi9IyINXBeoxx-GI2d0b3ets">Download Resume</a>
                    </div>
                    <div className="col-md-7 skills my-3">
                        <h2 className='color-brand'>Skills</h2>
                        <p><strong className='fs-4'>Expertise: </strong>{expertise.map(expert => <span className='badge bg-secondary mx-1 px-3 py-2'>{expert}</span>)}
                        </p>
                        {/* <p><strong className='fs-4'>Comfortable: </strong>{comfortables.map(comfortable => <span className='badge pill bg-secondary mx-1 p-2'>{comfortable}</span>)}
                        </p>
                        <p><strong className='fs-4'>Familiar: </strong>{familiars.map(familiar => <span className='badge bg-secondary mx-1 p-2'>{familiar}</span>)}</p> */}
                        <p><strong className='fs-4'>Tools: </strong>{tools.map(tool => <span className='badge bg-secondary mx-1 p-2'>{tool}</span>)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;