const path = require('path');
// const models = require('../models');
// const upvotes = models.Upvotes;
const db = require('./index.js');

const votesController = {}

votesController.voteAction = (req, res, next) => {
    let did = req.body.did;
    let typeofvote = req.body.typeofvote;
    let uid = req.body.uid;

    const query = {
        name: 'check-votes',
        text: 'SELECT * FROM votes WHERE did = $1 AND uid = $2',
        values: [did, uid]
    };
    db.query(query)
        .then((result) => {
            //query all the definitions
            console.log(result);
            if (result.rows.length <= 0) {
                let queryStr = "INSERT INTO votes(uid, did, typeofvote) VALUES($1, $2, $3)";
                const query = {
                    name: 'add-new-vote',
                    text: queryStr,
                    values: [uid, did, typeofvote]
                };
                db.query(query)
                    .then((result) => {
                        console.log("USER HAS VOTED A WORD");
                        res.send(result);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).end();
                    });
            } else {
                let queryStr = "UPDATE votes SET typeofvote = $1 WHERE uid = $2 AND did = $3";
                const query = {
                    name: 'update-vote',
                    text: queryStr,
                    values: [typeofvote, uid, did]
                };
                db.query(query)
                    .then((result) => {
                        console.log("USER HAS UPDATED VOTE");
                        res.send(result);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).end();
                    });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
}

votesController.getDefVotes = (req, res, next) => {
    const query = {
        name: 'check-votes-by-user',
        text: 'SELECT did, COUNT(uid), typeofvote FROM votes GROUP BY did, typeofvote ORDER BY did;',
        values: []
    };
    db.query(query)
        .then((result) => {
            console.log("VOTES EXIST BY USER");
            res.send(result.rows);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
}




module.exports = votesController;