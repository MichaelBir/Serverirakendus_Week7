const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pumpkinData = require('../data/pumpkin.json');
const broccoilData = require('../data/broccoil.json');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length); 
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({randomDrinkRecipe});
});

router.get('/pumpkin', (req, res) => {
    res.status(200).json({message: 'Got pumkin?'});
});

router.post('/pumpkin', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'admin' || req.body.password !== "1234") {
        res.status(200).json({broccoilData});
        console.log('Attention !!! Invalid credential !!!')
    }
    else {
        res.status(200).json({pumpkinData});
    }
});

module.exports = router;