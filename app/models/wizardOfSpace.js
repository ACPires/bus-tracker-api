var wizard = new Object();
var distance = require('../util/distance');

wizard.getNextStop = function(actualRouteStop, routePoints){
  var nextStop;

  routePoints.some(function(routePoint, index){
    if(actualRouteStop.position < routePoint.position &&
       routePoint.busStop){
        nextStop = routePoint;
        return false;
      };
  });

  return nextStop;
}


var getMiddlePoint = function(routePoints){
  console.log(routePoints.length);
  if(routePoints.length < 2) return -1;

  return Math.round(routePoints.length / 2);
}

var getCorrectPosition = function(lat, lng, routePoints){
  var startPoint = routePoints[0];
  var endPoint = routePoints[routePoints.length -1];
  var indexStart = 0;
  var indexEnd = routePoints.length;

  console.log("IndexStart: " + indexStart + " | IndexEnd: " + indexEnd);

  var distanceInit = distance.distanceBetween(lat,
                                              lng,
                                              startPoint.latitude,
                                              startPoint.longitude);

  var distanceEnd = distance.distanceBetween(lat,
                                             lng,
                                             endPoint.latitude,
                                             endPoint.longitude);

  var middle = getMiddlePoint(routePoints);

  console.log("middle: " + middle);

  if(middle >= 0){

    // var distanceMiddle = distance.distanceBetween(lat,
    //                                               lng,
    //                                               routePoints[middle].latitude,
    //                                               routePoints[middle].longitude);

    if(distanceInit > distanceEnd){
      indexStart = middle;
    }else{
      indexEnd = middle;
    }

    return getCorrectPosition(lat, lng, routePoints.slice(indexStart, indexEnd))

  }else{
    console.log("finish search");
    if(distanceInit > distanceEnd){
      return startPoint;
    }else{
      return endPoint;
    }
  }
};

wizard.getCorrectPosition = getCorrectPosition;

module.exports = wizard;
