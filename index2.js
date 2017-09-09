
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://5a28f520c540:27017/guide'); 
var restoSchema = mongoose.Schema({  
  nom: String,
  adresse: String,
  cpostal: String,
  ville: String,
  cuisine: String
});
var Resto = mongoose.model('Resto', restoSchema);

function look(res) {
   Book.find(function(err, restos){
        if(err){
          res.send(err);
        }
        res.send(restos);
      });
}


var app = express();

app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    //res.end('Vous etes a l\'accueil');
    look(res);

});


app.listen(8080);
