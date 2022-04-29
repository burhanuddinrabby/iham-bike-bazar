import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Carousel className='mt-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QJc8R12/image-2.png"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <div className="banner-container">
                            <h1 className='banner-heading'>Make yourself faster</h1>
                            <p>Iham Bike Bazar, a trusted place to began a journey of a biker.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QJc8R12/image-2.png"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <div className="banner-container">
                            <h1 className='banner-heading'>Make yourself faster</h1>
                            <p>Iham Bike Bazar, a trusted place to began a journey of a biker.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;