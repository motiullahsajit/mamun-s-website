import React, { useEffect } from 'react';
import './Home.css'
import myImg from '../../../images/mamun.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='home container-fluid' id='home'>
            <div className="container d-flex justify-content-center">
                <div data-aos="fade-up" className="col-lg-4 col-md-8 col-sm-10 my-5 text-center">
                    <div style={{borderRadius:"50%"}} className="col-lg-6 col-md-4  mx-auto my-3">
                        <img src={myImg} style={{borderRadius:"50%"}}  className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8 mx-auto my-3">
                        <h3>Irfan Mamun</h3>
                        <h6>technorio522@gmail.com</h6>
                    </div>
                    <div className="d-flex justify-content-around my-3 col-lg-4 col-md-6 col-sm-8 mx-auto">
                        <a className='text-white' href="https://www.linkedin.com/in/irfanmm522/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className='text-white' href="https://www.facebook.com/irfanmm522"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;