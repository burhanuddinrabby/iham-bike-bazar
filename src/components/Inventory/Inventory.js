import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [bike, setBike] = useState({});
    const { name, img, description, price, quantity, supplierName } = bike;
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:5000/product/${id}`)
            const data = await res.json()
            setBike(data);
        }
        fetchData();
    }, [])

    // removing and setting new item when button is clicked
    function removeOne() {
        let newQuantity = quantity - 1;
        const newBike = { ...bike, quantity: newQuantity }
        setBike(newBike);
        fetch(`http://localhost:5000/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
    }
    return (
        <div>

            <div className='container my-3 custom-width-info'>

                <div className="row">
                    <div className="col-lg-6 rounded d-flex justify-content-center align-items-center custom-bg-light">
                        <img src={img} className='className="mx-auto w-75 img-fluid' />
                    </div>
                    <div className="col-lg-6 custom-bg-dark rounded py-5">
                        <h2 className="card-title">{name}</h2>
                        <h2 className='my-2'>$ {price}</h2>
                        <small className='my-2'>Supplier : <b>{supplierName}</b></small><br />
                        <small>Available : {quantity > 0 ? quantity : 'Out of stock'}</small><br />
                        <p className='my-2'>{description}</p>
                        <button onClick={() => removeOne(id)} className='btn btn-primary' disabled={quantity <= 0}>Delivered One</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;