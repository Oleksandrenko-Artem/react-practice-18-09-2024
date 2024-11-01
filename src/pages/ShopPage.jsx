import Shop from './../components/Shop/Shop';
import styles from './../pages/ShopPage.module.css'

const ShopPage = () => {
    return (
        <div>
            <main>
                <h1 className={styles.header}>Shop</h1>
                <Shop/>
            </main>
        </div>
    );
}

export default ShopPage;
