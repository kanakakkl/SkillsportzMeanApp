const express = require('express');
const app = express();
const adSquadRoutes = express.Router();

let AdSquad = require('../models/adsquad');

adSquadRoutes.route('/ad').post(function (req, res) {
  console.log(req.body);
  let adSquad = new AdSquad(req.body);
  adSquad.save()
    .then(result => {
      console.log("saved");
      res.status(200).json({
        'adSquad': 'AdSquad in added successfully'
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

adSquadRoutes.route('/').get(function (req, res) {
  adSquad.find(function (err, adUnits) {
  if (err) {
    console.log(err);
  } else {
    res.json(adUnits);
  }
});
});

// // Defined edit route
// adUnitRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   AdUnit.findById(id, function (err, adUnit) {
//     res.json(adUnit);
//   });
// });

// //  Defined update route
// adUnitRoutes.route('/update/:id').post(function (req, res) {
//       AdUnit.findById(req.params.id, function (err, adUnit) {
//             if (!adUnit)
//               return next(new Error('Could not load Document'));
//             else {
//               adUnit.unit_name = req.body.unit_name;
//               adUnit.unit_price = req.body.unit_price;

//               adUnit.save().then(adUnit => {
//                     res.json('Update complete');
//                 });
//             }
//           });
//         });
        
//         // Defined delete | remove | destroy route
//         adUnitRoutes.route('/delete/:id').get(function (req, res) {
//             AdUnit.findByIdAndRemove({_id: req.params.id}, function(err, adUnit){
//                 if(err) res.json(err);
//                 else res.json('Successfully removed');
//             });
//         });
        
        module.exports = adSquadRoutes;