const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require('express-rate-limit');

const app = express();

//Says connect to local host to a DB named Meower
const db = monk('localhost/meower');
//Good thing about mongo is that it will automatically create the DB and collection
const mews = db.get('mews');
const filter = new Filter();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Meower!!'
    });
});

app.get('/mews', (req, res) => {
    mews
        .find()
        .then(mews => {
            res.json(mews);
        });
});

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' && 
    mew.content && mew.content.toString().trim() !== '';
}

app.use(rateLimit({
    windowsMs: 30 * 1000, 
    max: 1 //Limit each IP to 1 quests 30 seconds
}));

app.post('/mews', (req, res) => {
    if (isValidMew(req.body)) {
        //insert into the DB
        const mew = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };

        mews
            .insert(mew)
            .then(createdMew => {
                res.json(createdMew);
            });
    } else {
        res.status(422);
        res.json({
            message: 'Name and content are REQUIRED fields!'
        });
    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});