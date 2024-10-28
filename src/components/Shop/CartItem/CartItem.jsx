

const CartItem = (props) => {
    const { product: { id, title, quantity, price } } = props;
    return (
        <li>{title} quantity = {quantity} price = {price}</li>
    );
}

export default CartItem;
