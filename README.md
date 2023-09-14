# Tech_travel

The Test
Our coding test starts by downloading this data file…

– Flight Data

This is a file of data on different flights around the world over a two week period, we’d like you to create an API that to provide access to this data, we’d then like you to use this API to do some basic analysis on the data it returns. Finally, we’d output the results of your analysis to a web page.

Write your server code in either NodeJS, Perl or Python, feel free to use any helper or third party libraries you find useful.
For your output, use whatever technology you feel comfortable with to provide your results on a web page.

The data lists different flights and if that flight has more than one segment (where you need to change plane) then it lists out the different segments included in the flight.

The important things to know are:
– All airports are given as standard 3 letter IATA codes.
– fields prefixed with dep relate to the flight departure.
– fields prefixed with arr or dest relate to the flight arrival.
– Most of these flights are return flights so they have an outbound and an inbound leg, this is shown in the file as fields prefixed within or out.

Requirements
You should produce an API designed to run as a web service that can output the flight data provided above in a JSON format.

You should then create a web-page that that can retrieve the data from your API, and process it to produce the following data points:

– How many of the flights depart in the morning (before 12 AM)?
– What percentage of the total set of flights fly into Sweden?
– What are the 10 most popular destination airports?
– What’s the average journey time between London Heathrow (LHR) and Dubai (DXB)?
– At least one other statistic that you find interesting

Things to Think About
Some other things that aren’t requirements, but you might want to think about:

– How to structure your code? Well structured code helps anyone who comes to read your code later.
– How to interact with your API? Think about how your API could be used, and what data someone might need.
– What technology to use for your output? Many libraries such as react have many helper function to allow you to get your data and form your output.
– How to format your output? A good presentation can make all the difference to a user of a system.
