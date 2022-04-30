import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import './Home.css';
import ItemCard from './ItemCard';

const Home = () => {
    //inserting bikes from custom hook
    const [bikes] = useBikes();
    return (
        <div id='home'>

            {/* * * *  banner * * * * */}
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

            {/* Inventory items */}
            <div className='mt-5 mx-auto row w-90'>
                {
                    bikes.slice(0, 6).map(bike => <ItemCard key={bike._id} bike={bike} />)
                }
                <Button as={Link} to='/manage-items' variant="primary" className='d-block w-50 mx-auto'>Manage Inventory</Button>
            </div>
        </div>
    );
};

export default Home;