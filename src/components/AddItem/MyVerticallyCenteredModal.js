import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    What to submit?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Requirements</h4>
                <p>
                    There are six input boxes. Please fill them out with valid information.
                    <ol>
                        <li>Bike/Product Name</li>
                        <li>Supplier Name</li>
                        <li>Product Price</li>
                        <li>Quantity Of Product</li>
                        <li>Product Image URL</li>
                        <li>Short description of product</li>
                    </ol>
                    <h4 className='my-3'>While submitting image make sure your image url is valid and image size is in 1:1 ratio.</h4>
                    <h5>Here are some image link : </h5>
                    <ul>
                        <li>https://i.ibb.co/Z6xyq87/image-3.png</li>
                        <li>https://i.ibb.co/nwwFn0v/image-2.png</li>
                        <li>https://i.ibb.co/QNZb1pZ/image-1.png</li>
                        <li>https://i.ibb.co/KjzdZ9M/image.png</li>
                        <li>https://i.ibb.co/pPMMq40/image-removebg-preview-1.png</li>
                        <li>https://i.ibb.co/MSrG0LL/image-4.png</li>
                    </ul>
                    <h4 className='my-3'>A Sample Description is given below : </h4>
                    <p>
                        The Kawasaki Ninja 125 is a motorcycle in the Ninja sport bike series Kawasaki that was first introduced in 2018. Ninja 125 and Z125, both new models designed to meet the requirements of European A1 license holders.
                    </p>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;