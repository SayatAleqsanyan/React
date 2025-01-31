import React, { useEffect, useContext, useState } from 'react'
import { ProductContext } from '../providers/ProductProvider'
import Slider from '../Block/Slider'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

const Products = () => {
    const [sort, setSort] = useState('default')
    const {
        sortProducts,
        sortedProducts,
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
    } = useContext(ProductContext)

    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    })

    const [editProduct, setEditProduct] = useState(null)
    const [editValues, setEditValues] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    })

    const handleAddProduct = (e) => {
        e.preventDefault()
        addProduct(newProduct)
        setNewProduct({ name: '', price: '', description: '', image: '' })
    }

    const handleUpdateProduct = (e, id) => {
        e.preventDefault()
        updateProduct(id, editValues)
        setEditProduct(null)
    }

    const handleDeleteProduct = (id) => {
        deleteProduct(id)
    }

    const handleEditProduct = (product) => {
        setEditProduct(product.id)
        setEditValues({
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image,
        })
    }

    const handleCancelEdit = () => {
        setEditProduct(null)
    }

    useEffect(() => {
        sortProducts(sort) 
    }, [sort])

    const [value, setValue] = useState([1, 2000])

    useEffect(() => {
        console.log(value)
    }, [value])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
            <Slider productsInfo={products} />
            <div className="text-center p-5 select-none">
                <h2 className="text-xl font-bold mb-4">Products</h2>
                <form
                    onSubmit={handleAddProduct}
                    className="max-w-md mx-auto text-center space-y-4"
                >
                    <input
                        className="w-full p-2 border rounded"
                        type="text"
                        value={newProduct.name}
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                name: e.target.value,
                            })
                        }
                        placeholder="Product Name"
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                price: e.target.value,
                            })
                        }
                        placeholder="Price"
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="text"
                        value={newProduct.description}
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                description: e.target.value,
                            })
                        }
                        placeholder="Description"
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="text"
                        value={newProduct.image}
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                image: e.target.value,
                            })
                        }
                        placeholder="Image URL"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add Product
                    </button>
                </form>

                <select id="sort" onChange={(e) => setSort(e.target.value)}>
                    <option value="default">Sort by</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>

                <RangeSlider
                    min={1}
                    max={2000}
                    step={10}
                    value={[value[0], value[1]]}
                    onInput={setValue}
                />

                <div className="flex flex-wrap justify-center mt-8">
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="m-4 p-4 border rounded shadow-lg w-80 text-center bg-gray-100"
                        >
                            <h3 className="font-bold text-lg">
                                {product.name}
                            </h3>
                            <img
                                className="w-full h-40 object-cover mt-2"
                                src={product.image}
                                alt={product.name}
                            />
                            <p>{product.description}</p>
                            <p className="font-bold">${product.price}</p>
                            <div className="mt-4">
                                <button
                                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600"
                                    onClick={() => handleEditProduct(product)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() =>
                                        handleDeleteProduct(product.id)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                            {editProduct === product.id && (
                                <div className="mt-4 p-4 bg-white border rounded">
                                    <input
                                        className="w-full p-2 border rounded mb-2"
                                        type="text"
                                        value={editValues.name}
                                        onChange={(e) =>
                                            setEditValues({
                                                ...editValues,
                                                name: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <input
                                        className="w-full p-2 border rounded mb-2"
                                        type="number"
                                        value={editValues.price}
                                        onChange={(e) =>
                                            setEditValues({
                                                ...editValues,
                                                price: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <input
                                        className="w-full p-2 border rounded mb-2"
                                        type="text"
                                        value={editValues.description}
                                        onChange={(e) =>
                                            setEditValues({
                                                ...editValues,
                                                description: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <input
                                        className="w-full p-2 border rounded mb-2"
                                        type="text"
                                        value={editValues.image}
                                        onChange={(e) =>
                                            setEditValues({
                                                ...editValues,
                                                image: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <button
                                        className="px-3 py-1 bg-green-500 text-white rounded mr-2"
                                        onClick={(e) =>
                                            handleUpdateProduct(e, product.id)
                                        }
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-gray-500 text-white rounded"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products
