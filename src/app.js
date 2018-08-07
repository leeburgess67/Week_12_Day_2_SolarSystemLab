const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js')
document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  const menuItems = document.querySelector('ol');
  const planetList = new SelectView(menuItems);
  planetList.bindEvents();
  const infoDiv = document.querySelector('#planet-details')
  const planetInfoDisplay = new PlanetInfoView(infoDiv);
  planetInfoDisplay.bindEvents();


});
