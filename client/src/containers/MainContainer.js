import { useEffect, useState } from 'react'
import FlightList from '../components/FlightList'

const MainContainer = () => {

  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetchFlights()
  }, [])

  const fetchFlights = () => {
    fetch('http://localhost:9000/api/flights')
    .then(response => response.json())
    .then(flights => setFlights(flights));
  }



  return (
    <>
      <h1>ALL THE FLIGHTS!</h1>
      <FlightList flights={flights} />
    </>
  )
}

export default MainContainer