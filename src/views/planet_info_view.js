const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-object', (evt) => {
    const chosenPlanet = evt.detail;
    this.render(chosenPlanet);
  });
};

PlanetInfoView.prototype.render = function (planet) {
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `The name of the planet is ${planet.name}, the orbit is ${planet.orbit}, the day is ${planet.day}, the surface area is ${planet.surfaceArea}, the volume is ${planet.volume}, the gravity is ${planet.gravity}, there are ${planet.moons} moons.`
  // ${planet.image}
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);
};

module.exports = PlanetInfoView;
