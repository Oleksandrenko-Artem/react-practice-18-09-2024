import { useState } from "react";
import ProductsTable from "./ProductsTable/ProductsTable";
import data from './data'
import Cart from './Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cartProducts, setCartProducts] = useState([]);
    const addNewProduct = (id) => {
        const productAfterAdd = products.map((product) => {
            if (product.id === id) {
                product.quantity--;
                return product;
            }
            return product;
        })
        setProducts(productAfterAdd);
        const [newProduct] = products.filter((product) => product.id === id);
        if (cartProducts.includes(newProduct)) {
            newProduct.quantityInCart++;
        } else {
            newProduct.quantityInCart = 1;
        }
        const newCartProducts = [...new Set([...cartProducts, newProduct])]
        setCartProducts(newCartProducts);
    };
    return (
        <>
            <ProductsTable products={products} addNewProduct={addNewProduct} />
            <Cart cartProducts={cartProducts} />
        </>
    );
}

export default Shop;
