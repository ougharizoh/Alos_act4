const currencies = require('../data/hopitals.json')
const data = require('../data/data.json')
const { body, validationResult } = require('express-validator');


// **** version 1 : ****

// l'accueil :
module.exports.accueil = function (apiVersion, req, res) {

  return function () {
};
  
}

module.exports.hopitals_liste = function (apiVersion, req, res) {

  return res.status(200).json(hopitals)

}

module.exports.hopitals_liste_id = function (apiVersion, req, res) {

  const name = parseChar(req.params.rank)
  const hopitals= hopitals.find(hopitals => hopitals.name === name)
  res.status(200).json(hopitals)

}


// ajouter hopitals :
module.exports.hopitals_ajout = function (apiVersion, req, res) {
    body('id').isAlpha(),
    body('name').isAlpha();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }else {
      hopitals.push(req.body)
      return res.status(200).json(hopitals)
    }
}


// modifier hopital
module.exports.hopitals_modif = function (apiVersion, req, res) {
  const name= parseChar(req.params.name)
  let hopital = hopitals.find(hopital => hopital.name === name)
  hopital.id = req.body.id,
   hopital.name = req.body.name,
    hopital.wilaya = req.body.wilaya,
    hopital.etatique = req.body.etatique;

    res.status(200).json(hopitals)
}


// supprime hopital
module.exports.hopitals_supr = function (apiVersion, req, res) {

  const name = parseChar(req.params.rank)
  let hopital = hopitals.find(hopital => hopital.name === name)
  hopitals.splice(hopitals.indexOf(hopital), 1)
  res.status(200).json(hopitals)
}


// les fausses routes (l'errorhandler ) :
module.exports.hopitals_all = function (apiVersion, req, res, next) {

  res.status(404).json({
    status: 'fail ',
    message: `Can't find ${req.originalUrl} on this server! `
  });

  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
};



// **** version 2 : ****

// l'accueil :
module.exports.accueil_v2 = function (apiVersion, req, res) {

  return res.json({ status: "success", message: "Welcome To hopital API Version : 2.0.0" });

}


// récupéré data ( hopitals / market / candles ):
module.exports.data_liste = function (apiVersion, req, res) {

  return res.status(200).json(data)
}
