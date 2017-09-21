const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

router.post('/addprofile', (req, res, next) => {
  console.log(req.body);
  let newProfile = new Profile({
    name: req.body.name,
    dob: req.body.dob,
    nationality: req.body.nationality,
    location: req.body.location,
    association: req.body.association,
    team: req.body.team,
    gender: req.body.gender,
    sports: req.body.sports,
    about: req.body.about,
    interests: req.body.interests,
    charities: req.body.charities,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    snapchat: req.body.snapchat,
    youtube: req.body.youtube,
    twitch: req.body.twitch,
    pets: req.body.pets,
    drinks: req.body.drinks,
    married: req.body.married
  });

  Profile.addProfile(newProfile, (err, prof) => {
    if(err){
      res.json({success: false, msg: 'failed to add profile'});
    } else{
      res.json({success: true, msg: 'profile added'});
    }
  });
});


router.get('/profiles', (req, res, next) => {
  const query = Profile.find({});
  query.exec(function(err, profile){
    if (err) throw err;
    return res.json({'profile':profile});
  });

});

router.get('/editprofile', (req, res, next) => {
  res.send('edit prof');
});

router.get('/updateprofile', (req, res, next) => {
  res.send('updated');
});

module.exports = router;
