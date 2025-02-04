import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCountry, removeCountry } from "../redux/slices/countrySlice";
const Country = () => {
  const { countries } = useSelector((state) => state.countryReducer);
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      Country
      <ul>
        {countries.map((country) => (
            <li key={country.id}>{country.name}
          <button onClick={() => dispatch(removeCountry(country.id))}>
              Remove
          </button>
        </li>))}
      </ul>
      <div>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addCountry({ id: Math.random(), name: country }));
            setCountry("");
          }}
        >
          Add Country
        </button>
      </div>
    </div>
  );
};

export default Country;
