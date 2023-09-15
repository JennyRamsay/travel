# Tech_travel 🧑‍✈️✈️	

## API - [Flight Data 🛫](https://traveltek-eu1-prod-static.s3-eu-west-1.amazonaws.com/images/www.traveltek.net/recruittest/flighdata_A.zip) 

`This is a zip file of data on different flights around the world over a two week period. I created an API that can provide access to this data, I then used this API to do some basic analysis on the data it returns. Finally, I output the results of the analysis to a web page.`

## Tech Stack

- My server code is in NodeJS using a non relational database (MongoDB).
- For my output, I used React.js to display results on a web page.
- Currently working on HTML and CSS to make the page more aesthetically pleasing.

- The important things to note from the API are:

    - All airports are given as standard 3 letter IATA codes.
    - fields prefixed with dep relate to the flight departure.
    - fields prefixed with arr or dest relate to the flight arrival.
    - Most of these flights are return flights so they have an outbound and an inbound leg, this is shown in the file as fields prefixed within or out.

## MVP

Produce an API designed to run as a web service that can output the flight data provided in a JSON format.

* Create a web-page that that can retrieve the data from your API, and process it to produce the following data points:

    - How many of the flights depart in the morning (before 12 AM)?
    - What percentage of the total set of flights fly into Sweden?
    - What are the 10 most popular destination airports?
    - What’s the average journey time between London Heathrow (LHR) and Dubai (DXB)?
    - At least one other statistic that you find interesting


## Things to Think About

- Structure my code so that anyone who comes to read my code later can understand it.
- How best to interact with the API? Think about how the API could be used, and what data someone might need.
- What technology to use for your output? Many libraries can help to get the data and form my output.
- How to format my output? A good presentation can make all the difference to a user of a system.

## Usage

### To run the server side of the app

```js
# In_terminal

cd /server
npm install
createdb <database-name> //In this case travel_hub
npm run seeds
npm run server:dev

```

To view the API open in your browser on <br>

[http://localhost:9000/api/flights](http://localhost:9000/api/flights)



### To run the client side of the app

```js
# In_terminal

cd /client
npm install
npm start
```

To view the results on the webpage open your browser on<br>

[http://localhost:3000/](http://localhost:3000/)


