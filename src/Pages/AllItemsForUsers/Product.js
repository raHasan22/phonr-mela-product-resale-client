import React from 'react';

const Product = ({product, setDetails}) => {
    const {brandName, model, ram, rom, image, sellingPrice} = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="phone" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{brandName} {model}</h2>
            <p>Ram: {ram}</p>
            <p>Rom: {rom}</p>
            <p>Price: ${sellingPrice}</p>
            <div className="card-actions">
            <label htmlFor="details-1" className="btn" onClick={()=> setDetails(product)}>Details</label>
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Product;