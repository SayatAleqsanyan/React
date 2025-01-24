import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const filteredCard = await getProducts();
            setProducts(filteredCard);
        };
        fetchProducts();
    }, []);

    return (
        <div className="flex flex-wrap justify-start">
            {products.map((item) => (
                <div className="card" key={item.id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5 bg-gray-100 text-gray-800">
                        <img
                            className="w-full"
                            src={item.image}
                            alt="Product Images"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <NavLink to={"/products/" + item.id}>
                                    Product: {item.name}
                                </NavLink>
                            </div>
                            <div>
                                {item.price}{" $"}
                            </div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <NavLink className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Add
                            </NavLink>
                            { "Admin" === localStorage.getItem("Token") && <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                delete
                            </button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
