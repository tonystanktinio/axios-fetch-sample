import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          setCountries(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);

  return (
    <Fragment>
      <h1>List of all the countries</h1>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          {countries.map((country) => (
            <div key={country.name}>
              {country.name} - {country.capital}
            </div>
          ))}
        </>
      )}
    </Fragment>
  );
};

export default Country;
