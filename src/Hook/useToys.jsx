import { useState } from 'react';

const useToys = () => {
    const [toys, setToys] = useState([]);
    fetch('https://toy-zone-server-hasanmasud1039.vercel.app/toys')
    .then(res => res.json())
    .then(data => setToys(data))
    return (
        toys
    );
};

export default useToys;