import './Product.css'
const Product = (props) => {
    const {product: {title, quantity, price}} = props;
    return (
        <tr className='product'>
            <td className='product-properties'>{title}</td>
            <td className='product-properties'>{price} uah</td>
            <td className='product-properties'>{quantity} etc</td>
        </tr>
    );
}

export default Product;