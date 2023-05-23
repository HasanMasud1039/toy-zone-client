import React from 'react';
import Swal from 'sweetalert2';

const MyToy = () => {
    const handleUpdateCoffee = event => {
        event.preventDefault();

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subCategory = form.sub_category.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const details = form.description.value;
        let category_id;
        subCategory == 'Sports Car' ? (category_id = 100) :
            subCategory == 'Truck' ? (category_id = 300) :
                subCategory == 'Regular Car' ? (category_id = 200) :
                    subCategory == 'Mini Fire Truck' ? (category_id = 400) :
                        subCategory == 'Mini Police Car' ? (category_id = 500) :
                            subCategory == 'Limo Car' ? (category_id = 600) : category_id = 0;

        const newAddedToy = { name, picture, category_id, subCategory, price, rating, sellerEmail, sellerName, quantity, details };

        //send data to server from client
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>

        </div>
    );
};

export default MyToy;