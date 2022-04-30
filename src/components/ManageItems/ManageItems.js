import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBikes from './../../hooks/useBikes'
import './ManageItems.css';

const ManageItems = () => {
    //accessing all bikes from hook
    const [bikes, setBikes] = useBikes();

    //handling delete
    const removeItem = (id) => {
        console.log(id);
        //removing item from database
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log('deleted');
                    //filter other bikes and setting up a new state
                    const remaining = bikes.filter(user => user._id !== id);
                    setBikes(remaining);
                }
            })
    }
    return (
        <div>
            {/* {bikes.length} */}
            <div className='container'>

                <Button as={Link} to='/add-item' className='mt-5 d-block w-25' style={{ marginLeft: '70%' }}> Add item</Button>
            </div>
            <Table striped bordered hover className='my-5 mx-auto custom-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Bike Name</th>
                        <th>Supplier Name</th>
                        <th>Remove Item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bikes.map(bike => <tr key={bike._id}>
                            <td>
                                <img src={bike.img} className='custom-img' style={{ width: '20px' }} />
                            </td>
                            <td>
                                {bike.name}
                            </td>
                            <td>
                                {bike.supplierName}
                            </td>
                            <td className='d-flex justify-content-around'>
                                <button onClick={() => { removeItem(bike._id) }} className='btn btn-danger me-3'>Delete</button>
                                <Button as={Link} to={`/inventory/${bike._id}`} variant="primary">Update</Button>
                            </td>
                        </tr>)
                    }
                    <tr>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;