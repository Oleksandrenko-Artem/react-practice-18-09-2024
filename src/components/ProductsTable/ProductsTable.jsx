import Product from '../Product/Product'
import products from './data'
import styles from './ProductsTable.module.css'

const ProductsTable = () => {
    const getProduct = (product) => (<Product key={products.id} product={product}/>)
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

export default ProductsTable;
