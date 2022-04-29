import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import ItemCard from './ItemCard';

const Home = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    // console.log(bikes);
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
                    bikes.map(bike => <ItemCard key={bike.id} bike={bike} />)
                }
            </div>
        </div>
    );
};

export default Home;