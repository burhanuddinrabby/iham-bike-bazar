import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCard = ({ bike }) => {
    const { _id, name, supplierName, quantity, price, img, description } = bike;
    return (
        <Card className='col-lg-3 col-sm-8 col-md-5 custom-card'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title style={{ maxHeight: '40px' }}><h2>{name}</h2></Card.Title>
                <Card.Text style={{ minHeight: '144px' }}>
                    {description?.length >= 200 ? description.slice(0, 200) + '...' : description}
                </Card.Text>
                <h2 className='my-2' style={{ maxHeight: '40px' }}>$ {price}</h2>
                <small className='my-2'>Supplier : <b>{supplierName}</b></small><br />
                <small className='my-2'>Available : {quantity > 0 ? quantity : 'Out of stock'}</small><br />
                <Button as={Link} to={`inventory/${_id}`} variant="primary" className='mt-2'>Update</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;