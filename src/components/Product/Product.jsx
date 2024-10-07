import './Product.css'
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

export default Product;