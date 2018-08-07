const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
    this.element.addEventListener('click', (evt) => {
      const selectedPlanet = evt.target.id;
      PubSub.publish('SelectView:clicked-planet-id', selectedPlanet);
      
  });




};

module.exports = SelectView;
