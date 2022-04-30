import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    //loading user
    const [user] = useAuthState(auth);

    //adding item
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = parseInt(e.target.quantity.value);
        const supplierName = e.target.supplierName.value;
        console.log({ name, img, description, price, quantity, supplierName });
    }
    return (
        <div>
            <Form className='w-75 mx-auto my-5' onSubmit={addItem}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter bike name" name='name' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter your name" name='supplierName' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Price" name='price' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Enter quantity" name='quantity' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter image url" name='img' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as='textarea' className='w-100' placeholder='Add some description' name='description' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" value={user.email} disabled />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Your Product
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;