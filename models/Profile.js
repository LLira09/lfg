const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  games: {
    type: [String],
    required: true
  },
  usernames: {
    origin: {
      type: String
    },
    steam: {
      type: String
    },
    psn: {
      type: String
    },
    xbl: {
      type: String
    },
    epic: {
      type: String
    }
  },
  social: {
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    youtube: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
