var wizard = new Object();
var distance = require('../util/distance');

wizard.getPrevision = function(routeStop){
  if(!routeStop) throw new Error('Needs a array of routeStop');

  console.log("Number of routestops: " + routeStop.length);

  var totalDistance = 0;

  routeStop.forEach(function(currentStop, index){
    if(index != routeStop.length - 1){
      totalDistance += distance.distanceBetween(currentStop.latitude,
                                                currentStop.longitude,
                                                routeStop[index + 1].latitude,
                                                routeStop[index + 1].longitude);
    }
  });

  totalDistance = totalDistance * 1000;

  console.log("distance: " + totalDistance + " meters");

  var metersPerSecond = 16.666666667; // 60 km/h

  var time = totalDistance / metersPerSecond;
  var hours   = Math.floor(time / 3600);
  var minutes = Math.floor((time - (hours * 3600)) / 60);

  if (hours   < 10) {hours   = "0" + hours;}
  if (minutes < 10) {minutes = "0" + minutes;}

  if (hours == 0) {
    hours   = "";
  }else{
    hours = hours + "h"
  }

  if (minutes == 0) {
    minutes = "Próximo";
  }else{
    minutes = minutes + "min";
  }

  return hours + minutes;
}

module.exports = wizard;
