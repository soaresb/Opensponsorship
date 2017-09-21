const mongoose = require('mongoose');



const ProfileSchema = mongoose.Schema({
  name : {
    type: String
  },
  dob : {
    type: String
  },
  nationality : {
    type: String
  },
  location : {
    type: String
  },
  association : {
    type: String
  },
  team : {
    type: String
  },
  gender : {
    type: String
  },
  sports : {
    type: String
  },
  about : {
    type: String
  },
  interests : {
    type: String
  },
  charities : {
    type: String
  },
  facebook : {
    type: String
  },
  instagram : {
    type: String
  },
  twitter : {
    type: String
  },
  snapchat : {
    type: String
  },
  youtube : {
    type: String
  },
  twitch : {
    type: String
  },
  pets : {
    type: String
  },
  drinks : {
    type: String
  },
  married : {
    type: String
  }
});


const Profile = module.exports = mongoose.model('Profile',ProfileSchema);

module.exports.getProfileById = function (id, callback) {
  Profile.findById(id, callback);
}

module.exports.getProfileByName = function (name, callback) {
  const query = {name: name}
  Profile.findOne(query, callback);
}


module.exports.addProfile = function(newProfile, callback){
  
  newProfile.save(callback);
}
