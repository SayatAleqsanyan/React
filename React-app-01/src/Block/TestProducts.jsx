import React, { useEffect } from "react";
import { useProduct } from "../providers/ProductProvider";
import Product from "./Product";

const TestProducts = () => {
    const { products, getProducts, deleteProduct } = useProduct();

    useEffect(() => {
        getProducts();
    });

    return (
        <div>
            <h2>Products</h2>
            <Product
                products={products}
                deleteProduct={deleteProduct}
                refreshProducts={getProducts}
            />
        </div>
    );
};

export default TestProducts;
