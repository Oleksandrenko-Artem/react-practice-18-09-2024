import PropTypes from 'prop-types';
import Product from '../Product/Product';
import styles from './ProductsTable.module.css'

const ProductsTable = (props) => {
    const { products, addNewProduct } = props;
    const getProduct = (product) => (
        <Product key={products.id} product={product} addNewProduct={addNewProduct}/>
    )
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {products.map(getProduct)}
            </tbody>
        </table>
    );
}

ProductsTable.propTypes = {
    products: PropTypes.array,
    addNewProduct: PropTypes.func
}

export default ProductsTable;
