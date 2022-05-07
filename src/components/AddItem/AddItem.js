import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const AddItem = () => {
    //loading user
    const [user] = useAuthState(auth);
    //modal state
    const [modalShow, setModalShow] = useState(false);

    //adding item
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = parseInt(e.target.quantity.value);
        const supplierName = e.target.supplierName.value;
        const email = e.target.email.value;

        //adding item to database
        fetch('https://protected-peak-69494.herokuapp.com/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, img, description, price, quantity, supplierName, sold: 0 })
        })

        //adding to order too
        fetch(`https://protected-peak-69494.herokuapp.com/add-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, img, description, price, quantity, supplierName, email })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })

        //reset form
        e.target.reset();
    }
    return (
        <div>
            <h1 className='mx-auto text-center mt-5'>Please add <span className='text-primary'>product</span> with valid info</h1>

            <Form className='w-75 mx-auto my-5' onSubmit={addItem}>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Bike Name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Supplier Name" name='supplierName' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Product Price" name='price' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Enter Product Quantity" name='quantity' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Product Image url" name='img' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control as='textarea' className='w-100' placeholder='Add Some Description About Your Product' name='description' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" name='email' value={user.email} disabled />
                </Form.Group>

                {/*  Button trigger modal  */}
                <div className='mb-3'>
                    <div className='d-flex align-items-center '>
                        What to submit &nbsp;
                        <QuestionMarkCircleIcon style={{ width: '28px' }} onClick={() => setModalShow(true)} />
                    </div>
                </div>

                <Button variant="primary" type="submit">Add Your Product</Button>
                <br />

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Form>
        </div>
    );
};

export default AddItem;