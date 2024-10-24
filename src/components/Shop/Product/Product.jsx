import PropTypes from 'prop-types';
import './Product.css';
import { useState } from 'react';
const Product = (props) => {
    const { product: { title, quantity, price } } = props;
    const [productColor, setProductColor] = useState(false);
    const productSelect = productColor ? 'red' : 'black';
    const changeProductColor = () => {setProductColor(true)};
    return (
        <tr onClick={changeProductColor} className='product' style={{color: productSelect}}>
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