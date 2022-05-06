import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { TrashIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { RotatingLines } from 'react-loader-spinner';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const [bikes, setBikes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getBikes() {
            const url = `https://protected-peak-69494.herokuapp.com/order-list?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setBikes(data);
            }
            catch (err) {
                if (err.response.status === 401 || err.response.status === 403) {
                    localStorage.removeItem('token');
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getBikes();

    }, [])

    const removeItem = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?');
        //removing item from database
        if (confirm) {
            fetch(`https://protected-peak-69494.herokuapp.com/order-list/${id}`, {
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
            {

                bikes.length === 0 ?
                    <div className='mx-auto mt-5'>
                        <div className='mx-auto w-25  justify-content-center d-flex'>
                            <RotatingLines width="100" className='d-block mx-auto' />
                        </div>
                    </div>
                    :
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
                                bikes.map(bike =>
                                    <tr key={bike._id}>
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
            }
        </div>
    );
};

export default MyItems;