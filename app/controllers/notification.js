module.exports = function(app){

  var controller = {};

  controller.sendAlertToStop = function(req, res){
    var id = req.params.id_busmodule;

    app.firebase.database().ref('/' + id).set({
    	needs_to_stop: Date.now()
    });

    res.status(200).json({send: 'ok'});
  };

  return controller;
};
