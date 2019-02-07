const models = require('.');
const path = require('path');
const db = require('./index.js');
const fetch = require('node-fetch');

// const Users = models.users;
const userController = {};

userController.isUser = (req, res) => {
  const googleId = req.body.profileObj.googleId;
  console.log('ANYTHING');
  const query = {
    name: 'check-if-user',
    text: 'SELECT * FROM users WHERE googleid = $1',
    values: [googleId],
  };
  db.query(query)
    .then(result => {
      console.log('CHECK USER EXISTS');
      if (result.rows.length === 0) {
        userController.addUser(req, res);
      } else {
        console.log('USER EXISTS!!!!!!!');
        res.send(JSON.stringify(result.rows));
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

userController.addUser = (req, res) => {
  const email = req.body.profileObj.email;
  const avatar = req.body.profileObj.imageUrl;
  const googleId = req.body.profileObj.googleId;

  fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      const username = myJson.results[0].login.username;
      console.log(username);
      return username;
    })
    .then(username => {
      let querystr =
        'INSERT INTO users \
          (username, email, avatar, credibility, googleid) \
          VALUES($1, $2, $3, $4, $5)';
      const query = {
        name: 'add-user',
        text: querystr,
        values: [username, email, avatar, 0, googleId],
      };
      db.query(query)
        .then(user => {
          console.log('USER HAS BEEN CREATED');
          res.send(JSON.stringify(user));
        })
        .catch(err => {
          console.error(err);
          res.status(500).end();
        });
    })
    .catch(err => {
      console.log('ERROR!!!!!', err);
      res.status(500).end();
    });
};

userController.getUserById = (req, res, next) => {
  const query = {
    text: `SELECT username, avatar, credibility FROM users WHERE id = ${
      res.locals.uid
    }`,
  };
  db.query(query)
    .then(result => {
      res.locals.user = result.rows[0];
      next();
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

module.exports = userController;
