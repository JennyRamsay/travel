import React from 'react'
import React, { useEffect, useState } from "react";
import { getFlights, postFlight } from "../Services/FlightService";
import FlightList from "../components/FlightList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Home from "../components/Home";

const MainContainer = () => {
  const [userFlights, setUserFlights] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [searchSuccessful, setSearchSuccessful] = useState(false);

 
  }

  const addSearchedFlight = () => {
    const newFlight = {
      origin: origin,
      destination: destination,
      footprint: emissions,
      date: date,
      arrivalDate: arrivalDate,
    };

    postFlight(newFlight).then(addFlight(newFlight));
  };

  useEffect(() => {
    getFlights().then((allFlights) => {
      setUserFlights(allFlights);
    });
  }, []);

  const addFlight = (flight) => {
    setUserFlights([...userFlights, flight]);
  };

  const removeFlight = (id) => {
    const flightsToKeep = userFlights.filter((f) => f._id !== id);
    setUserFlights(flightsToKeep);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                origin={origin}
                setOrigin={setOrigin}
                destination={destination}
                setDestination={setDestination}
                searchSuccessful={searchSuccessful}
                addSearchedFlight={addSearchedFlight}
                addFlight={addFlight}
                userFlights={userFlights}
                removeFlight={removeFlight}
                setDate={setDate}
                date={date}
                arrivalDate={arrivalDate}
                setArrivalDate={setArrivalDate}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/flightlist"
            element={
              <FlightList
                userFlights={userFlights}
                removeFlight={removeFlight}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );


export default MainContainer