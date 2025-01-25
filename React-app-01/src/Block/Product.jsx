import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ products, deleteProduct, refreshProducts }) => {
    return (
        <div className="flex flex-wrap justify-start">
            {products.map((item) => (
                <div className="card" key={item.id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5 bg-gray-100 text-gray-800 w-[225px] h-[400px]">
                        <img
                            className="w-[220px] h-[220px] object-cover"
                            src={item.image || "https://picsum.photos/200"}
                            alt="Product Images"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <NavLink to={"/products/" + item.id}>
                                    Product: {item.name}
                                </NavLink>
                            </div>
                            <div>{item.price}{" $"}</div>
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <NavLink className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Add
                            </NavLink>
                            {"Admin" === localStorage.getItem("Token") && (
                                <button
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    onClick={() => deleteProduct(item.id, refreshProducts)} // Trigger delete on click
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
