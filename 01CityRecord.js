function cityRecord(name, population, treasury) {
  let cityObject = {
    name: name,
    population: population,
    treasury: treasury,
  };
  return cityObject;
}
console.log(cityRecord("Tortuga", 7000, 15000));
