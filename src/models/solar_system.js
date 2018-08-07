const planets = require('../data/planets.js')
const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:clicked-planet-id', (evt) => {
    const selectedPlanetName = evt.detail;
    this.publishPlanetByName(selectedPlanetName);
  });
};

  SolarSystem.prototype.publishPlanetByName = function (selectedPlanetName) {
    let chosenPlanet;
    for (const planet of planets) {
      if (planet.name === selectedPlanetName) {
        chosenPlanet = planet
      }

    }
      PubSub.publish('SolarSystem:selected-planet-object', chosenPlanet);
  };
  // change to foreach or .find



module.exports = SolarSystem;
