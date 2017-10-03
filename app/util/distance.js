var distanceUtil = new Object();

distanceUtil.distanceBetween = function(lat1, lng1, lat2, lng2){
  var r = 6371; // raio da terra
  var lat = Math.PI / 180 * (lat2 - lat1);
  var lng = Math.PI / 180 * (lng2 - lng1);
  var a =
    Math.sin(lat / 2) * Math.sin(lat / 2) +
    Math.cos(degTorad(lat1)) * Math.cos(degTorad(lat2)) *
    Math.sin(lng / 2) * Math.sin(lng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = r * c; // distância em km
  return distance;
}

function degTorad(deg) {
  return deg * (Math.PI / 180)
}

module.exports = distanceUtil;
