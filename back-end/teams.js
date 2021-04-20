const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();

const users = require("./users.js");
const pokemon = require("./pokemon.js");
const User = users.model;
const Pokemon = pokemon.model;


  // Create a scheme for items in the museum: a title and a path to an image.
  const teamSchema = new mongoose.Schema({
    title: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },

    pok1: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },

    pok2: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },
    pok3: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },
    pok4: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },
    pok5: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },
    pok6: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pokemon'
    },
  });

 // Create a model for items in the museum.
 const Team = mongoose.model('Team', teamSchema);
router.post('/', async (req, res) => {
    let pk1 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk1Name});
    let pk2 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk2Name});
    let pk3 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk3Name});
    let pk4 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk4Name});
    let pk5 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk5Name});
    let pk6 = await Pokemon.findOne({SpeciesPokemonName: req.body.pk6Name});
    let usr = await User.findOne({username: req.body.user.username});

    console.log("We here");
    console.log(req.body);
    console.log(pk6)
    const item = new Team({
      title: req.body.title,
      user: usr,
      pok1: pk1,
      pok2: pk2,
      pok3: pk3,
      pok4: pk4,
      pok5: pk5,
      pok6: pk6,
    });
    console.log(item)
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      let items = await Team.find().populate('pok1').populate('pok2').populate('pok3').populate('pok4').populate('pok5').populate('pok6').populate('user');
      console.log(items)
      res.send(items);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      var matches = []
      let items = await Team.find().populate('pok1').populate('pok2').populate('pok3').populate('pok4').populate('pok5').populate('pok6').populate('user');

      for (let i = 0; i < items.length; i++) {
          console.log(req.params.id);
          console.log(items[i].user.username)
          if (items[i].user.username == req.params.id) {
              matches.push(items[i]);
          }
      }
      console.log(matches)
      res.send(matches);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  router.put('/:id', async (req, res) => {
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
  
  router.delete('/:id', async (req, res) => {
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

  module.exports = {
    model: Team,
    routes: router,
  }