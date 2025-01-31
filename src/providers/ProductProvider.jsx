import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const API_URL_PRODUCTS = "http://localhost:4000/products";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [sortedProducts, setSortedProducts] = useState([])

    // 📌 Ֆունկցիա՝ տվյալներ ստանալու համար
    const fetchData = async () => {
        setLoading(true)
        try {
            const [productsRes] = await Promise.all([
                axios.get(API_URL_PRODUCTS),
            ])
            setProducts(productsRes.data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // 📌 Նոր ապրանք ավելացնել (POST)
    const addProduct = async (newProduct) => {
        try {
            const response = await axios.post(API_URL_PRODUCTS, newProduct)
            setProducts((prevProducts) => [...prevProducts, response.data])
        } catch (err) {
            setError(err.message)
        }
    }

    // 📌 Փոփոխել ապրանքը (PUT)
    const updateProduct = async (id, updatedProduct) => {
        try {
            await axios.put(`${API_URL_PRODUCTS}/${id}`, updatedProduct)
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === id
                        ? { ...product, ...updatedProduct }
                        : product
                )
            )
        } catch (err) {
            setError(err.message)
        }
    }

    // 📌 Ջնջել ապրանքը (DELETE)
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API_URL_PRODUCTS}/${id}`)
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== id)
            )
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const sortProducts = (sort) => {
        let sortedArray = [...products] // Պահպանել սկզբնական array-ն

        if (sort === 'default') {
            sortedArray = [...products] // Վերադարձնել սկզբնական վիճակը
        } else if (sort === 'name') {
            sortedArray.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === 'price') {
            sortedArray.sort((a, b) => a.price - b.price)
        }

        setSortedProducts(sortedArray)
    }

    const filterProducts = (filter) => {
        let filteredArray = [...products] // Պահպանել սկզբնական array-ն

        if (filter === 'default') {
            filteredArray = [...products] // Վերադարձնել սկզբնական վիճակը
        } else if (filter === 'name') {
            filteredArray.sort((a, b) => a.name.localeCompare(b.name))
        } else if (filter === 'price') {
            filteredArray.sort((a, b) => a.price - b.price)
        }

        setSortedProducts(filteredArray)
    }

    useEffect(() => {
        sortProducts('default')
    }, [products])

    // useEffect-ը կաշխատի ամեն անգամ, երբ "sort" state-ը փոփոխվի

    return (
        <ProductContext.Provider
            value={{
                sortedProducts,
                sortProducts,
                setSortedProducts,
                products,
                loading,
                error,
                addProduct,
                updateProduct,
                deleteProduct,
                fetchData,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext)
}
