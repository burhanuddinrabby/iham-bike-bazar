import React from 'react';
import './../Inventory/Inventory.css';
const Trip = () => {
    return (
        <div>
            <h1 className='text-danger text-center my-5'>Why US?</h1>
            <div className='justify-content-between align-items-center custom-grid'>
                <div className="d-flex flex-column custom-bg-dark rounded custom-height justify-content-center align-items-center px-5">
                    <h2 className='text-center my-3'>Trip to the <span className='text-primary'>WORLD!!</span></h2>
                    <p className='text-center'>
                        The life is to short to live. As long you live enjoy each day. So, let's go and watch around the whole world. Iham Bike Bazar is the best place explore the world. You can buy the best bikes for your trip. You can also sell your bikes. Choose your bike
                    </p>
                    <button className='btn btn-primary mt-1'>Move right now</button>
                </div>
                <div className="rounded d-flex justify-content-center align-items-center custom-bg-light custom-height">
                    <img src='https://i.ibb.co/bBS0nG8/image-5.png' className='trip-img' alt='not found' />
                </div>
            </div>
        </div>
    );
};

export default Trip;