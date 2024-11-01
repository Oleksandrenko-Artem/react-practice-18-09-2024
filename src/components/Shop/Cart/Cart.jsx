import PropTypes from 'prop-types';
import CartItem from './../CartItem/CartItem';
import styles from './Cart.module.css'

const Cart = (props) => {
    const { cartProducts } = props;
    const showItems = (product) => <CartItem key={product.id} product={product} />;
    
    const totalSumma = cartProducts.reduce((summa, product) => {
        return summa + (product.price * product.quantityInCart);
    }, 0)
    return (
        <div>
            <h2 className={styles.cartHeader}>Cart</h2>
            {
                cartProducts.length === 0 ?
                    <p className={styles.cart}>empty cart</p> :
                    <>
                    <ol>
                        {cartProducts.map(showItems)}
                    </ol>
                    <hr />
                        <p className={styles.totalPrice}><i className={styles.totalColor}>total:</i> <b>{totalSumma}</b></p>
                    </>
            }
        </div>
    );
}

Cart.propTypes = {
    cartProducts: PropTypes.array
}

export default Cart;
