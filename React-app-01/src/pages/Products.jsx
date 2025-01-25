import React, { useState, useEffect } from "react";
import Product from "../Block/Product";
import Newproduct from "../Block/Newproduct";
import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:4000/products");
        return response.data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const deleteProduct = async (productId, refreshProducts) => {
    try {
        await axios.delete(`http://localhost:4000/products/${productId}`);
        refreshProducts(); 
    } catch (error) {
        console.log("Error deleting product:", error.message);
    }
};

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const filteredCard = await getProducts();
        setProducts(filteredCard);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Newproduct refreshProducts={fetchProducts} />
            <Product
                products={products}
                deleteProduct={deleteProduct} 
                refreshProducts={fetchProducts} 
            />
        </div>
    );
};

export default Products;
