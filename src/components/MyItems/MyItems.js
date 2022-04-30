import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { TrashIcon } from '@heroicons/react/solid'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order-list?email=${email}`)
            .then(res => res.json())
            .then(data => setBikes(data))

    }, [])

    const removeItem = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?');
        // console.log(id);
        //removing item from database
        if (confirm) {
            fetch(`http://localhost:5000/order-list/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        //filter other bikes and setting up a new state
                        const remaining = bikes.filter(user => user._id !== id);
                        setBikes(remaining);
                    }
                })
        }
    }
    return (
        <div>
            {bikes.length}
            <Table striped bordered hover className='my-5 mx-auto custom-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Bike Name</th>
                        <th>Supplier Name</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bikes.map(bike => <tr key={bike._id}>
                            <td>
                                <img src={bike.img} className='custom-img' style={{ width: '20px' }} alt='not found' />
                            </td>
                            <td>
                                {bike.name}
                            </td>
                            <td>
                                {bike.supplierName}
                            </td>
                            <td className='text-center'>
                                <button onClick={() => { removeItem(bike._id) }} className='btn manage-btn btn-danger'>
                                    <TrashIcon className="h-5 w-5 d-block text-blue-500" style={{ width: '20px' }} />
                                </button>
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

export default MyItems;