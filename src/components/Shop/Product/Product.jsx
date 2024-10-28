import PropTypes from 'prop-types';
import './Product.css';
import { useState } from 'react';
const Product = (props) => {
    const { product: { id, title, quantity, price },
        addNewProduct } = props;
    const addToCart = () => addNewProduct(id)
    return (
        <tr onClick={addToCart}>
            <td className='product-properties'>{title}</td>
            <td className='product-properties'>{price} uah</td>
            <td className='product-properties'>{quantity} etc</td>
        </tr>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number
    })
}
export default Product;