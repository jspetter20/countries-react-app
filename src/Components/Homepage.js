import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Country from "./Country";
import axios from "axios";
import NavBar from "./Navigation/NavBar";
import loadingIcon from "../assets/images/loadingIcon.gif";
import NumberOfCountriesPergion from "./NumberOfCountriesPerRegion";
import Footer from "./Navigation/Footer";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    //setError(false);

    const api = "https://restcountries.eu/rest/v2/region/africa";
    axios({
      method: "GET",
      url: `${api}`,
    })
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);

        setLoading(false);
      })
      .catch((e) => {
        //setError(true);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div>
        {loading && (
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        )}
      </div>
      <div className="container-contries">
        <NumberOfCountriesPergion countries={countries} />
        <div class="row ">
          {countries.map((data) => (
            <Country data={data} key={data.numericCode} />
          ))}
        </div>
      </div>
      {countries.length > 0 ? <Footer /> : ""}
    </>
  );
}
