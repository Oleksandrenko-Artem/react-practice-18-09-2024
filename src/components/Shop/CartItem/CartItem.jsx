import PropTypes from 'prop-types';
import styles from './CartItem.module.css'

const CartItem = (props) => {
    const { product: { id, title, quantityInCart, price } } = props;
    return (
        <li><b>{title}</b> <i className={styles.productInfo}>quantity in cart</i> = <b>{quantityInCart}</b> <i className={styles.productInfo}>price total</i> = <b>{price * quantityInCart}</b></li>
    );
}

CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantityInCart: PropTypes.number
    })
}
export default CartItem;
