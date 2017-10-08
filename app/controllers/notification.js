module.exports = function(app){

  var controller = {};

  controller.sendAlertToStop = function(req, res){
    var id = req.params.id_busmodule;

    app.firebase.database().ref('/' + id).set({
    	needs_to_stop: Date.now()
    });

    res.status(200).json({send: 'ok'});
  };

  controller.sendAlertToUser = function(req, res){
    var id = req.params.id_user;

    var request = require('request');
    console.log(process.env.FIREBASE_CLOUD_MESSAGE_KEY);

    request({
      url: 'https://fcm.googleapis.com/fcm/send',
      method: 'POST',
      headers: {
        'Content-Type' :' application/json',
        'Authorization': process.env.FIREBASE_CLOUD_MESSAGE_KEY
      },
      body: JSON.stringify(
        { "data": {
          "body": "Seu ônibus chegou",
          "text": "Ele está parado te aguardando"
        },
          "to" : id
        }
      )
    }, function(error, response, body) {
      if (error) {
        console.error(error, response, body);
        res.json(error)
      }
      else if (response.statusCode >= 400) {
        console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
        res.status(response.statusCode).json(body)
      }
      else {
        console.log('Done!')
        res.json("Mensagem enviada");
      }
    });
  }

  return controller;
};
