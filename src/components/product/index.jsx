import './style.sass';
import React from 'react';

// components
import * as cards from '../cards';

// images
import productImage from '../../assets/images/product.jpg';

export default function () {
    return <div className="product">
        <div className="image"><img src={productImage} alt="" /></div>
        <cards.detail />
    </div>
};
