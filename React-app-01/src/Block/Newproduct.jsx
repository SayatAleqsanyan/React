import { FiFilePlus } from "react-icons/fi";
import React, { useState } from "react";
import axios from "axios";
import { notify } from "../utils/notify";
import Sdider from "../Block/Sdider";

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:4000/products");
        return response.data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const productsInfo = await getProducts();

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

const NewProduct = ({ refreshProducts }) => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [formVisible, setFormVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const isAdmin = localStorage.getItem("Token") === "Admin";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productName || !price || !description) {
            setErrorMessage("All fields are required.");
            notify(errorMessage, "red");
            return;
        }

        if (price <= 0) {
            setErrorMessage("Price must be a positive number.");
            notify(errorMessage, "red");
            return;
        }

        try {
            await postProduct(productName, price, description, image);
            setSuccessMessage("Product added successfully!");
            setErrorMessage("");
            setProductName("");
            setPrice("");
            setDescription("");
            setImage("");
            refreshProducts();
            notify(successMessage, "green");
        } catch (error) {
            setErrorMessage(
                error.message || "Something went wrong, please try again."
            );
            setSuccessMessage("");
            notify(errorMessage, "red");
        }
    };

    if (!isAdmin) return null;

    return (
        <div>
            <span className="m-10">
                <button
                    onClick={() => setFormVisible(!formVisible)}
                    className="text-9xl hover:text-[#141c4b]"
                >
                    <FiFilePlus className="text-9xl cursor-pointer" />
                </button>
            </span>

            {formVisible && (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="border p-2 mb-4"
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="number"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="border p-2 mb-4"
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border p-2 mb-4"
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="border p-2 mb-4"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Add Product
                    </button>
                </form>
            )}

            <Sdider productsInfo={productsInfo} />
        </div>
    );
};

export default NewProduct;
