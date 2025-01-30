//Arrays for the program to pull from to create a random flight
const departureCities = ["New York", "Los Angeles", "Miami", "Dallas", "Seattle"]
const destinationCities = ["Tokyo", "Beijing", "London", "Amsterdam", "Berlin", "Paris"]
const seatClass = ["Economy", "Economy Plus", "Business", "First"]

//Function to generate a random departure, destination and seat class
function flightGenerator() {
    const departure = departureCities[Math.floor(Math.random() * departureCities.length)];
    const destination = destinationCities[Math.floor(Math.random() * destinationCities.length)];
    const seat = seatClass[Math.floor(Math.random() * seatClass.length)];

    return `It's time to plan your surprise flight! You will be departing from ${departure}, and your destination is ${destination}. Your seat will be in ${seat} class. Enjoy your trip!`
}

//Logs a randomly generated flight to the console
console.log(flightGenerator())

