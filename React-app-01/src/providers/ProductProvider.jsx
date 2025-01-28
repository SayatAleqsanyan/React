import React, { createContext, useContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:4000/products");
        return response.data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const postProduct = async (productName, price, description, image) => {
    const products = await getProducts();
    const id = products.length + 1;
    const newName = productName;

    try {
        await axios.post("http://localhost:4000/products", {
            name: newName,
            id,
            price,
            description,
            image,
        });
    } catch (error) {
        throw new Error("Failed to add product. Please try again later.");
    }
};

const putProduct = async (productName, price, description, image) => {
    const products = await getProducts();
    const id = products.length + 1;
    const newName = productName;

    try {
        await axios.put(`http://localhost:4000/products/${id}`, {
            name: newName,
            id,
            price,
            description,
            image,
        });
    } catch (error) {
        throw new Error("Failed to add product. Please try again later.");
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

export const ProductProvider = ({ children }) => {
    return (
        <ProductContext.Provider
            value={{
                getProducts,
                postProduct,
                putProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductContext);
};
