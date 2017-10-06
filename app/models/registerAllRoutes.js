module.exports = function(app){

  var register = {};

  register.registerAll = function(){
    const Route = app.models.route;
    const Busline = app.models.busLine;
    const BusStop = app.models.busStop;
    const RouteStop = app.models.routePoint;
    const BusTerminal = app.models.busTerminal;

    BusStop.remove().exec();
    Busline.remove().exec();
    Route.remove().exec();
    RouteStop.remove().exec();
    BusTerminal.remove().exec();

    var tj = require('@mapbox/togeojson'),
        fs = require('fs'),
        DOMParser = require('xmldom').DOMParser;

    var busstopsKml = new DOMParser().parseFromString(fs.readFileSync('./app/models/kmls/busstops.kml', 'utf8'));
    var routesKml = new DOMParser().parseFromString(fs.readFileSync('./app/models/kmls/routes.kml', 'utf8'));
    var terminalsKml = new DOMParser().parseFromString(fs.readFileSync('./app/models/kmls/terminals.kml', 'utf8'));

    var busstopsRegisters = tj.kml(busstopsKml);
    var routesRegisters = tj.kml(routesKml);
    var terminalsRegisters = tj.kml(terminalsKml);

    var routes = [];
    var routesPoint = [];
    var busLines = [];
    var busStops = [];
    var busTerminals = [];

    var tempIndex = 0;

    routesRegisters.features.forEach(function(feature, index){
        busLines.push({
          busLine:feature.properties.name
        });
    });

    terminalsRegisters.features.forEach(function(feature, index){
        busTerminals.push({
          name:feature.properties.name
        });
    });

    var serialBusStop = 65505;

    busstopsRegisters.features.forEach(function(feature, index){
        busStops.push({
          description:feature.properties.name,
          serial:serialBusStop,
          latitude:feature.geometry.coordinates[1],
          longitude:feature.geometry.coordinates[0],
          address:"Rua fake"
        });

        serialBusStop++;
    });

    BusTerminal.create(busTerminals)
      .then(function(busstops){
              console.log('BusTerminals cadastrados');
            },
            function(error){
              console.log("BusTerminals não cadastrados." + error);
            }
      );

    BusStop.create(busStops)
      .then(function(busstops){
              console.log('BusStops cadastrados');
            },
            function(error){
              console.log("BusStops não cadastrados." + error);
            }
      );


    Busline.create(busLines)
      .then(function(buslinesSaved){
              console.log('BusLines cadastrados');

              buslinesSaved.forEach(function(busline, index){
                routes.push({
                  busLine: busline._id
                });
              })

              Route.create(routes)
                .then(function(routesSaved){
                  console.log("Rotas cadastradas");

                  routesRegisters.features.forEach(function(feature, index){
                      for(var i = 0; i < feature.geometry.coordinates.length; i++){
                        routesPoint.push({
                          route:routesSaved[index]._id,
                          latitude:feature.geometry.coordinates[i][1],
                          longitude:feature.geometry.coordinates[i][0],
                          position:i
                        })
                      }
                  });

                  console.log(routesPoint[routesPoint.length - 1]);

                  RouteStop.create(routesPoint)
                    .then(function(routesPointSaved){
                      console.log("Pontos da rota cadastrados");
                    }, function(error){
                      console.log("Não foi possível salvar os pontos das rotas. " + error);
                    });
                },
                function(error){
                  console.log("Não foi possível cadastras as rotas. " + error);
                });

            },
            function(error){
              console.log("BusLines não cadastrados." + error);
            });

  }

  return register;
}
