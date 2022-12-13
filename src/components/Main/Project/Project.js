import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Project.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Project = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
      }, [])
    const { name, category, technologies, images, description, liveSite, clientSite, serverSite } = props.project;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
            <div data-aos="zoom-in-up" className="row align-items-center bg-white px-2 py-3 my-4">
                <div className="col-md-7 pb-2">
                    <h3 className='color-brand'>{name}</h3>
                    <h5>{category}</h5>
                    <p className='text-dark'>{description}</p>
                    <p><span className='color-brand fs-4'>Technology:</span> <span className="green-yellow-text">{technologies.map(technologie => <span className='badge bg-secondary mx-1 px-3 py-2'>{technologie}</span>)}</span></p>
                    <div className="mt-4 site-link">
                        <a className="badge rounded-pill bg-success mx-1" rel="noreferrer" target='_blank' href={liveSite}><FontAwesomeIcon icon={faWindowMaximize} /> Live Site</a>
                        <a className="badge rounded-pill bg-warning mx-1" rel="noreferrer" target='_blank' href={clientSite}><FontAwesomeIcon icon={faGithub} /> Client Site</a>
                        {serverSite && <a className="badge rounded-pill bg-secondary mx-1" rel="noreferrer" target='_blank' href={serverSite}><FontAwesomeIcon icon={faGithub} /> Server Site</a>}
                    </div>
                </div>
                <div className="col-md-5">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
    );
};

export default Project;