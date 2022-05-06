import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useBikes from '../../hooks/useBikes';
import './Home.css';
import ItemCard from './ItemCard';
import Trip from './Trip';

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
                    bikes.length === 0 ?
                        <div className='mx-auto my-5'>
                            <div className='mx-auto w-25  justify-content-center d-flex'>
                                {/* < color="grey" strokeColor="#FF5733" className='d-block mx-auto' /> */}
                                <RotatingLines width="100" strokeColor="#FF5733" className='d-block mx-auto' />
                            </div>
                        </div>
                        :
                        bikes.slice(0, 6).map(bike => <ItemCard key={bike._id} bike={bike} />)
                }
                <Button as={Link} to='/manage-items' variant="primary" className='d-block w-50 mx-auto'>Manage Inventory</Button>
            </div>

            {/* Trip section */}
            <section className='container my-5'>
                <Trip></Trip>
            </section>
            <hr className='w-75 mx-auto d-block my-5' />
            <section className='container my-5'>
                <div className='justify-content-between align-items-center custom-grid'>
                    <div className="rounded d-flex justify-content-center align-items-center custom-bg-light custom-height">
                        <img src='https://i.ibb.co/PmxnpVD/image-6.png' className='trip-img' alt='not found' />
                    </div>
                    <div className="d-flex flex-column custom-bg-dark rounded custom-height justify-content-center align-items-center px-5">
                        <h2 className='text-center my-3'>Makes you <span className='text-primary'>Faster!!</span></h2>
                        <p className='text-center'>
                            Iham bike bazar is the best place to get or order the best bikes and accessories. You can buy the best bikes and accessories for yourself or your friend. Don't get late for office!! Choose your bike.
                        </p>
                        <Button as={Link} to='/manage-items' className='btn btn-primary mt-1'>Choose now</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;