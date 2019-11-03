const jwt = require('jsonwebtoken');
const config = require('../config.js');

export default (req, res) => {
  if (req.body.username === 'admin' && req.body.password === 'admin') {
    let token = jwt.sign({ username: req.body.username },
      config.secret,
      {
        expiresIn: '24h'
      }
    );
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token
    });
  }

  res.status('401').end();
};