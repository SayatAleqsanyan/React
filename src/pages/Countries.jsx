import React, { useState } from "react";
import { useCountry } from "../providers/CountryProvider";

const Countries = () => {
    const { countries, addCountry, removeCountry, editCountry } = useCountry()
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [text, setText] = useState('Add')
    return (
        <div>
            <ul className="flex flex-col gap-2">
                {countries.map((country) => (
                    <li key={country.id} className="flex  gap-2">
                        {country.name}
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => removeCountry(country.id)}
                        >
                            Remove
                        </button>

                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                setId(country.id)
                                setName(country.name)
                                setText('Save')
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Add Country"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!id) {
                        addCountry({ id: Math.random(), name: name })
                        setName('')
                    } else if (id) {
                        editCountry(id, name)
                        setName('')
                        setText('Add')
                    }
                }}
            >
                {text}
            </button>
        </div>
    )
};

export default Countries;
