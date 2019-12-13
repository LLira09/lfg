const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');

router.get('/api/v1/profile/:platform/:gamertag', async (req, res) => {
  try {
    console.log(req.params.platform, req.params.gamertag);
    res.send('hello');
    // const options = {
    //   uri: `https://public-api.tracker.gg/v2/apex/standard/profile/${req.params.platform}/${req.params.gamertag}`,
    //   method: 'GET',
    //   headers: {
    //     'TRN-Api-Key': 'config.get(TRACKER_API_KEY)',
    //     'user-agent': 'node.js'
    //   }
    // };
    // request(options, (error, response, body) => {
    //   if (error) console.error(error);
    //   if (response.stausCode !== 200) {
    //     return res.status(404).json({ msg: 'Stats for player not found' });
    //   }
    //   res.json(JSON.parse(body));
    // });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
