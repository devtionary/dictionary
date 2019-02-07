const db = require('./index.js');

const votesController = {};

votesController.voteAction = (req, res, next) => {
  let did = req.body.did;
  let typeofvote = req.body.typeofvote;
  let uid = req.body.uid;

  const query = {
    name: 'check-votes',
    text: 'SELECT * FROM votes WHERE did = $1 AND uid = $2',
    values: [did, uid],
  };
  db.query(query)
    .then(result => {
      //query all the definitions
      console.log(result);
      if (result.rows.length <= 0) {
        let queryStr =
          'INSERT INTO votes(uid, did, typeofvote) VALUES($1, $2, $3)';
        const query = {
          name: 'add-new-vote',
          text: queryStr,
          values: [uid, did, typeofvote],
        };
        db.query(query)
          .then(result => {
            console.log('USER HAS VOTED A WORD');
            res.send(result);
          })
          .catch(err => {
            console.error(err);
            res.status(500).end();
          });
      } else {
        let queryStr =
          'UPDATE votes SET typeofvote = $1 WHERE uid = $2 AND did = $3';
        const query = {
          name: 'update-vote',
          text: queryStr,
          values: [typeofvote, uid, did],
        };
        db.query(query)
          .then(result => {
            console.log('USER HAS UPDATED VOTE');
            res.send(result);
          })
          .catch(err => {
            console.error(err);
            res.status(500).end();
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

votesController.getDefVotes = (req, res, next) => {
  const query = {
    name: 'check-votes-by-user',
    text:
      'SELECT did, COUNT(uid), typeofvote FROM votes GROUP BY did, typeofvote ORDER BY did;',
    values: [],
  };
  db.query(query)
    .then(result => {
      console.log('VOTES EXIST BY USER');
      res.send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

votesController.tallyVotesForDefs = (req, res, next) => {
  const defs = [];
  for (let did of Object.keys(res.locals.defs)) {
    defs.push(did);
  }

  const query = {
    text: `SELECT * from votes where dId = ANY ($1)`,
    values: [defs],
  };
  db.query(query)
    .then(result => {
      const tally = {};
      for (let vote of result.rows) {
        if (!tally[vote.did]) {
          tally[vote.did] = { up: 0, down: 0 };
        }
        tally[vote.did][vote.typeofvote]++;
      }
      for (let votes of Object.keys(tally)) {
        res.locals.defs[votes].votes = tally[votes];
      }
      const word = res.locals.word;
      word.defs = res.locals.defs;
      word.user = res.locals.user;
      res.send(word);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

votesController.getTopVoteByDefIds = (req, res, next) => {
  let stringBuilder = '(';

  const defs = [];
  for (let did of Object.keys(res.locals.defs)) {
    defs.push(did);
  }

  const query = {
    text: `SELECT * from votes where dId = ANY ($1)`,
    values: [defs],
  };
  db.query(query)
    .then(result => {
      const tally = {};
      for (let vote of result.rows) {
        let count = tally[vote.did] === undefined ? 0 : tally[vote.did];
        if (vote.typeofvote === 'up') tally[vote.did] = count + 1;
        else tally[vote.did] = count - 1;
      }

      const topDefs = {};
      for (let did of Object.keys(tally)) {
        const wid = res.locals.defs[did].wid;
        if (topDefs[wid] === undefined) {
          topDefs[wid] = { did: did, tally: tally[did] };
        } else if (tally[did] > topDefs[wid].tally) {
          topDefs[wid] = { did: did, tally: tally[did] };
        }
      }

      let i = 0;
      for (let wid of Object.keys(topDefs)) {
        res.locals.words[i++].definition = res.locals.defs[topDefs[wid].did];
      }
      res.send(res.locals.words);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};
module.exports = votesController;
