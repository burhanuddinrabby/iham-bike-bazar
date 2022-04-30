import { useEffect, useState } from "react";

function useBikes() {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return [bikes, setBikes];
}

export default useBikes;