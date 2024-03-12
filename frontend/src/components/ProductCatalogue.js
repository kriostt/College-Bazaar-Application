import React from 'react';

const ProductCatalogue = () => {
    const products = [
        { id: 1, name: 'Backpack', description: 'Durable backpack with multiple compartments and padded straps, ideal for carrying books and laptops.', price: 24.99 },
        { id: 2, name: 'Bluetooth Speaker', description: 'Portable Bluetooth speaker with high-fidelity sound and built-in microphone for hands-free calling.', price: 44.99},
        { id: 3, name: 'Water Bottle', description: 'Stay hydrated throughout the day with this water bottle.', price: 9.99 }
    ];

    return (
        <div>
            <h2>Product Catalogue</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: ${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalogue;
