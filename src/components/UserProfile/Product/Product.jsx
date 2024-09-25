import './Product.css'
const Product = (props) => {
    const {name, quantity, price} = props;
    return (
        <tr className='product'>
            <td>product name: {name}</td>
            <td>product number: {quantity}</td>
            <td>product price: {price}</td>
        </tr>
    );
}

export default Product;