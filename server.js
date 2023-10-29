const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
// const pumpkinRouter = require('./routers/pumpkin');
// const rke143Router = require('./routers/nodejs');
const app = express();

const pumpkinData = require('./data/pumpkin.json');
const broccoilData = require('./data/broccoil.json');
const nodejsData = require('./data/nodejs.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length); 
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({randomDrinkRecipe});
});

app.get('/pumkin', (req, res) => {
    res.status(200).json({message: 'Got pumkin?'});
});

app.get('/rke143', (req, res) => {
    res.status(200).json({message: 'Got rke143?'});
});

app.post('/pumpkin', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'admin' || req.body.password !== "1234") {
        res.status(200).json({broccoilData});
    }
    else {
        res.status(200).json({pumpkinData});
    }
});

app.post('/rke143', (req, res) => {
    console.log(req.body);

    if(req.body.username !== 'rke' || req.body.password !== "143") {
        res.send('Invalid credential');
        console.log('Attention !!! Invalid credential !!!')
    }
    else {
        res.status(200).json({nodejsData});
    }
});
// app.use('/pumpkin', pumpkinRouter);
// app.use('/rke143', rke143Router);
app.listen(port, () => {
    console.log(`Server is running ${port}`);
});