import './style.sass';
import React from 'react';
import ReactDom from 'react-dom/client';

// component
import Product from './components/product';

ReactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <Product />
    </React.StrictMode>
);
