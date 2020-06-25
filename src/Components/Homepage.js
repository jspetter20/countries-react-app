import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Country from "./Country";
import axios from "axios";
import NavBar from "./Navigation/NavBar";
import loadingIcon from "../assets/images/loadingIcon.gif";


export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

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
        setError(true);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div>{loading && <img src={loadingIcon} alt="loading" className="loadingIcon" />}</div>
      <Container className="contries">
    
            <div class="row ">
              {countries.map((data) => (
                <Country data={data} key={data.numericCode} />
              ))}
            </div>
      
   
      </Container>
    </>
  );
}
