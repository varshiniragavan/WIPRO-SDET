async function getAstroData() {
    const URL = "http://api.open-notify.org/astros.json";
    const response = await axios.get(URL);
    const astroData = response.data;
    const peopleInSpace = astroData.people.map(person => person.name);
    const numberOfPeople = astroData.number;
    const craftNames = astroData.people.map(person => person.craft);
    
    const astroList = document.getElementById('astroData');
    astroList.innerHTML = peopleInSpace.map((name, index) => 
        `<li>${name} (${craftNames[index]})</li>`).join('');
    document.getElementById('numberOfPeople').textContent = numberOfPeople;
}

getAstroData();