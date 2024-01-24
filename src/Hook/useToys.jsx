import { useState, useEffect } from 'react';

const useToys = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://toy-zone-server-new.vercel.app/toys')
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching toys:', error);
                setLoading(false);
            });
    }, []);

    return {
        toys,
        loading,
    };
};

export default useToys;
