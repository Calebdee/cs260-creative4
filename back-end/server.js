const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/newPokeTeam', {
  useNewUrlParser: true
});

app.post('/api/items', async (req, res) => {
  const item = new Team({
    title: req.body.title,
    pk1Name: req.body.pk1Name,
    pk1Pic: req.body.pk1Pic,
    pk2Name: req.body.pk2Name,
    pk2Pic: req.body.pk2Pic,
    pk3Name: req.body.pk3Name,
    pk3Pic: req.body.pk3Pic,
    pk4Name: req.body.pk4Name,
    pk4Pic: req.body.pk4Pic,
    pk5Name: req.body.pk5Name,
    pk5Pic: req.body.pk5Pic,
    pk6Name: req.body.pk6Name,
    pk6Pic: req.body.pk6Pic,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Team.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    
    let item = await Team.findOne({
      _id: req.params.id});
    console.log(req.body);
    item.title = req.body.title;
    item.description = req.body.description;
    item.save();

    res.sendStatus(200);
  } catch {
    console.log(error);
    res.sendStatus(500);
  }
})

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Team.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  pk1Name: String,
  pk1Pic: String,
  pk2Name: String,
  pk2Pic: String,
  pk3Name: String,
  pk3Pic: String,
  pk4Name: String,
  pk4Pic: String,
  pk5Name: String,
  pk5Pic: String,
  pk6Name: String,
  pk6Pic: String,
});


// Create a model for items in the museum.
const Team = mongoose.model('Team', itemSchema);


app.listen(3007, () => console.log('Server listening on port 3007!'));
