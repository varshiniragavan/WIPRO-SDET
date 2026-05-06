
fetch("https://api.spacexdata.com/v3/missions")
  .then(res => res.json())
  .then(missions => missions.filter(m => m.manufacturers.includes("SpaceX"))) // Filter by manufacturer
  .then(filtered => filtered.map(m => m.mission_name))                        // Map to mission names
  .then(data => console.log("SpaceX Missions:", data))
  .catch(err => console.error("Error fetching SpaceX data:", err));