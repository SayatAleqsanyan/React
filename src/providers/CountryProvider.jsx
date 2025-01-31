import React, { createContext, useContext, useState } from 'react'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([
        {
            id: Math.random(),
            name: 'United States',
        },
        {
            id: Math.random(),
            name: 'United Kingdom',
        },
    ])

    const addCountry = (country) => {
        const find = countries.find((c) => c.name === country.name)

        if (country.name !== '' && !find) {
            setCountries([...countries, country])
        }
    }

    const removeCountry = (id) => {
        setCountries(countries.filter((country) => country.id !== id))
    }

    const editCountry = (id, name) => {
        const find = countries.find((c) => c.id === id)
        if (find) {
            find.name = name
        }
    }

    return (
        <CountryContext.Provider
            value={{ countries, addCountry, removeCountry, editCountry }}
        >
            {children}
        </CountryContext.Provider>
    )
}

export const useCountry = () => {
    return useContext(CountryContext)
}
