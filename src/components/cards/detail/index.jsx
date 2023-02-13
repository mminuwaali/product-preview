import './style.sass';
import React from 'react';

// icons
import cart from '../../../assets/icons/cart.svg';

export default function () {
    return <div className="product-detail">
        <span>perfume</span>
        <h2>gabrielle essence eau de parfum</h2>
        <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
            <h3>$149.99</h3>
            <h4>$169.99</h4>
        </div>
        <button><img src={cart} alt="" />Add to Cart</button>
    </div>
};

