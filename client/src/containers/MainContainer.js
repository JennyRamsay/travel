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

    // Analysis functions
    const morningFlights = flights.filter(flight => {
      const departureTime = parseInt(flight._attributes.indeparttime.split(':')[0], 10);
      return departureTime < 12;
    });
    console.log(morningFlights)

    const swedenFlights = flights.filter(flight => {
      return flight._attributes.destair === 'ARN'; // Assuming ARN is Stockholm Arlanda Airport
    });
  
    const destinationAirports = flights.reduce((destinations, flight) => {
      if (!destinations[flight._attributes.destair]) {
        destinations[flight._attributes.destair] = 0;
      }
      destinations[flight._attributes.destair]++;
      return destinations;
    }, {});
  
    const topDestinations = Object.entries(destinationAirports)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

      const lhrToDxbFlights = flights.filter(flight => {
        return flight._attributes.depair === 'LHR' && flight._attributes.destair === 'DXB';
      });
    
      const totalJourneyTime = lhrToDxbFlights.reduce((total, flight) => {
        const departureTime = new Date(`2018-01-01 ${flight._attributes.outdeparttime}`);
        const arrivalTime = new Date(`2018-01-02 ${flight._attributes.inarrivaltime}`);
        const journeyTime = arrivalTime - departureTime;
        return total + journeyTime;
      }, 0);
    
      const averageJourneyTime = totalJourneyTime / lhrToDxbFlights.length;
      // 1 minute = 60000 milliseconds

      const formatMilliseconds = (milliseconds) => {
        const totalMinutes = Math.floor(milliseconds / 60000); 
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours} hours ${minutes} minutes`;
      }



  return (
    <>
      <h1>ALL THE FLIGHTS!</h1>
      <h1>Total Flights: {flights.length}</h1>
      <p>Morning Flights: {morningFlights.length}</p>
      <p>Flights to Sweden: {swedenFlights.length}</p>
      <h2>Top 10 Destination Airports</h2>
      <ul>
        {topDestinations.map(([airport, count]) => (
          <li key={airport}>{airport}: {count} flights</li>
        ))}
      </ul>
      {/* <p>Average Journey Time LHR to DXB: {averageJourneyTime.toFixed(2)} milliseconds</p> */}
      <p>Average Journey Time LHR to DXB: {formatMilliseconds(averageJourneyTime)}</p>

      <FlightList flights={flights} />
    </>
  )
}

export default MainContainer