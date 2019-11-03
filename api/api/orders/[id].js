const jwt = require('jsonwebtoken');
const config = require('../../config.js');

export default (req, res) => {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (!err) {
        return res.json({
          id: '27451382-a392-4821-a952-c29968dbe189',
          title: 'Order 1',
          price: 123,
          date: 'Nov 12',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        });
      } else {
        return res.status(403).end();
      }
    });
  } else {
    return res.status(401).end();
  }
};
