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
    // let [newQuantity, setQuantity] = useState(quantity);
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
            loading something or : {id}
            <br />
            data : {bike.name}
            <br />
            {quantity > 0 ? quantity : 'Out of stock'}
            {/* {quantity} */}
            <br />
            <button onClick={() => removeOne(id)}>add</button>
        </div>
    );
};

export default Inventory;