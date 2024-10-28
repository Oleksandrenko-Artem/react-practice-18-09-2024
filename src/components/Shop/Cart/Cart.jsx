import CartItem from './../CartItem/CartItem';

const Cart = (props) => {
    const { cartProducts } = props;
    const showItems = (product) => <CartItem key={product.id} product={product}/>;
    return (
        <div>
            <h2>Cart</h2>
            {
                cartProducts.length === 0 ?
                    <p>empty cart</p> :
                    <ol>
                        {cartProducts.map(showItems)}
                    </ol>
            }
        </div>
    );
}

export default Cart;
