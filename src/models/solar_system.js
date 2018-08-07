const planets = require('../data/planets.js')
const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-array', this.planets);
  PubSub.subscribe('SelectView:selected-planet-index', (evt) => {
    const selectedPlanetIndex = evt.detail;
    this.publishPlanetDetail(selectedPlanetIndex);
  });
};

  SolarSystem.prototype.publishPlanetDetail = function (selectedPlanetIndex) {
    const selectedPlanet = this.planets[selectedPlanetIndex];
    PubSub.publish('SolarSystem:selected-planet-object', selectedPlanet);
  };
module.exports = SolarSystem;
