const axios = require('axios');

async function getAstroData() {
    const URL = "http://api.open-notify.org/astros.json";
    const response = await axios.get(URL);
    const astroData = response.data;
    const peopleInSpace = astroData.people.map(person => person.name);
    const numberOfPeople = astroData.number;
    const craftNames = astroData.people.map(person => person.craft);
    
    console.log("People in space:", numberOfPeople);
    console.log("Names:", peopleInSpace);
    console.log("Crafts:", craftNames);
}

getAstroData();