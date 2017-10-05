var wizard = new Object();
var distance = require('../util/distance');

wizard.getNextStop = function(actualRouteStop, routePoints){
  var nextStop;

  routePoints.some(function(routePoint){
    if(actualRouteStop.position < routePoint.position &&
      routePoint.busStop){
        nextStop = routePoint;
        return true;
      };
  });

  return nextStop;
}

wizard.getCorrectPosition = function(lat, lng, routePoints){

}

module.exports = wizard;
