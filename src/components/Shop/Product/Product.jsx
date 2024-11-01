import PropTypes from 'prop-types';
import './Product.css';


const Product = (props) => {
    const { product: { id, title, quantity, price }, addNewProduct } = props;
    const addToCart = () => addNewProduct(id)
    if (quantity === 0) {
        return null;
    }
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
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number
    }),
    addNewProduct: PropTypes.func
}
export default Product;