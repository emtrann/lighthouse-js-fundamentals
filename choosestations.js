const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = []; 
  for (stations of stations) {
    const capacity = stations[1]; 
    const location = stations[2];  
    if (capacity >= 20 && (location === "school" || location === "community centre")) {
      goodStations.push(stations[0])
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));