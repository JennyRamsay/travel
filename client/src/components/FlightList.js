const FlightList = ({ flights }) => {
    return (
      <div>
        <h2>Flight List goes here!</h2>
        <ul>
          {flights.map((flight, id) => (
            <li key={id}>{flight._id} </li>
            ))}
        </ul>
      </div>
    )
  }
  
  export default FlightList