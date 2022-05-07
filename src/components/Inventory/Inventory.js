import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [bike, setBike] = useState({});
    const { name, img, description, price, quantity, supplierName, sold } = bike;
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://protected-peak-69494.herokuapp.com/product/${id}`)
            const data = await res.json()
            setBike(data);
        }
        fetchData();
    }, [id])

    // removing and setting new item when button is clicked
    function removeOne() {
        let newQuantity = quantity - 1;
        let newSold = sold + 1;
        const newBike = { ...bike, quantity: newQuantity, sold: newSold };
        setBike(newBike);
        fetch(`https://protected-peak-69494.herokuapp.com/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
    }
    //adding to stock manually
    function addToStock(e) {
        e.preventDefault();
        const itemValue = parseInt(e.target.itemValue.value);
        if (e.target.itemValue.value === '') {
            return;
        }
        let newQuantity = quantity + itemValue;
        const newBike = { ...bike, quantity: newQuantity }
        setBike(newBike);
        fetch(`https://protected-peak-69494.herokuapp.com/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
        //reset form
        e.target.itemValue.value = '';
    }
    return (
        <div>

            <div className='container my-3 w-75 custom-width-info'>

                <div className="row">
                    <div className="col-lg-6 rounded d-flex justify-content-center align-items-center custom-bg-light">
                        <img src={img} className='className="mx-auto w-75 img-fluid' alt='not found' />
                    </div>
                    <div className="col-lg-6 custom-bg-dark rounded py-5">
                        <h2 className="card-title">{name}</h2>
                        <h2 className='my-2'>$ {price}</h2>
                        <small className='my-2'>Supplier : <b>{supplierName}</b></small><br />
                        <small>Available : {quantity > 0 ? quantity : 'Out of stock'}</small><br />
                        <small className='my-2'>Total sold : <b>{sold}</b></small><br />
                        <p className='my-2'>{description}</p>
                        <button onClick={() => removeOne(id)} className='btn btn-primary' disabled={quantity <= 0}>Delivered</button>
                        <Form className='w-75 mx-auto my-5' onSubmit={addToStock}>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder='Add to stock' name='itemValue' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add to stock
                            </Button>
                        </Form>
                    </div>
                    <Button as={Link} to='/manage-items' variant="primary" className='d-block my-5 w-50 mx-auto'>Manage Inventory</Button>
                </div>
            </div>
        </div >
    );
};

export default Inventory;