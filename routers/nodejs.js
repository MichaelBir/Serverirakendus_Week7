const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const nodejsData = require('../data/nodejs.json');

router.use(bodyParser.json());

router.get('/rke143', (req, res) => {
    res.status(200).json({message: 'Got rke143?'});
});


router.post('/rke143', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'rke' || req.body.password !== "143") {
        res.send('Invalid credential');
        console.log('Attention !!! Invalid credential !!!')
    }
    else {
        res.status(200).json({nodejsData});
    }
});

module.exports = router;