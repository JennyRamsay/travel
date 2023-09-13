const FlightList = ({ flights }) => {
    return (
      <div id="flight-list">
        <h2>Flight List goes here!</h2>
        <ul>
          {flights.map((flight, index) => {
            return (
              <li key={index}>{flight._attributes} </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
  export default FlightList