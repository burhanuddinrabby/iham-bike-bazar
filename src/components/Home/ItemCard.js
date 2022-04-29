import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCard = ({ bike }) => {
    const { _id, name, supplierName, price, img, description } = bike;
    return (
        <Card className='col-lg-3 col-sm-8 col-md-5 m-3 custom-height'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h2 className='my-2'>$ {price}</h2>
                <small className='my-2'>Supplier : <b>{supplierName}</b></small><br /><br />
                <Button as={Link} to={`inventory/${_id}`} variant="primary" className='btn-bottom'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;