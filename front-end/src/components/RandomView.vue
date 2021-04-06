<template>

  <div class="wrapper">
    <div class="enter">
    <input type="text" id="titleOfTeam" placeholder="Enter a team name">
    <div>
    <button v-on:click="saveTeam" class="button">Save Team</button>
    <button class="button">New Random Team</button>
    </div>
    </div>
    <div class="pokemon">
      
      
      <div class="product" v-for="pokemonTwo in cart" :key="pokemonTwo.SpeciesID">
        <div class="info">
          <h1>{{ pokemonTwo.SpeciesPokemonName }}</h1>
          <hr id="blackpls">
          <h2>Type1: {{ pokemonTwo.SpeciesType1 }} </h2>
          <h2>Type2: {{ pokemonTwo.SpeciesType2 }} </h2>
          <h2>Height: {{ pokemonTwo.SpeciesHeight }} </h2>
          <h2>Weight: {{ pokemonTwo.SpeciesWeight }} </h2>
        </div>
        <div class="price">
          <button class="auto" v-on:click="remove(pokemonTwo)">
            
          </button>
        </div>
        <div class="image">
          <img v-bind:src= "`https://www.${pokemonTwo.SpeciesImageUrl}`" class="pokePic"/>
        </div>
      
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TeamView',
  props: {
    cart: Array
  },
   methods: {
    remove(cart) {
      console.log("HELP");
      this.$root.$data.cart = this.$root.$data.cart.filter(function(el) { return el.SpeciesID != cart.SpeciesID; }); 
      return 0;
    },
    async saveTeam() {
      
      try {
        await axios.post('api/items', {
          title: document.getElementById("titleOfTeam").value,
          pk1Name: this.cart[0].SpeciesPokemonName,
          pk1Pic: this.cart[0].SpeciesImageUrl,
          pk2Name: this.cart[1].SpeciesPokemonName,
          pk2Pic: this.cart[1].SpeciesImageUrl,
          pk3Name: this.cart[2].SpeciesPokemonName,
          pk3Pic: this.cart[2].SpeciesImageUrl,
          pk4Name: this.cart[3].SpeciesPokemonName,
          pk4Pic: this.cart[3].SpeciesImageUrl,
          pk5Name: this.cart[4].SpeciesPokemonName,
          pk5Pic: this.cart[4].SpeciesImageUrl,
          pk6Name: this.cart[5].SpeciesPokemonName,
          pk6Pic: this.cart[5].SpeciesImageUrl,
        });
      } catch(error) {
        console.log(error);
      }
    },
  },
  computed: {
      test() {
      return this.$root.$data.cart.length;
      }
    },
}
</script>

<style scoped>
.wrapper {
  align-content: center;
  justify-content: center;
}

.button {
  max-width: 200px;
  border-radius: 10px;
}

.enter {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}

.product {
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  width: 210px;
  background-color: white;
}

.pokemon {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  }

.pokemonTwo {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  background-color: white;
}
hr { background-color: black; height: 1px; border: 0; }

.pokemonTwo img {
  border: 2px solid #333;
  height: 250px;
  width: 250px;
  object-fit: cover;
  background-color: white;
}

.pokemonTwo .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  background-color: white;
}

.info {
  background: #ff0000;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 1px solid black;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px 30px;
  height: 110px;
  
}

.info {
  font-size:5px;
  font-family: 'Pokemon GB', sans-serif;
}


.price {
  display: flex;
  justify-content: center;
  bottom: 0;
}

.pokePic {

  max-height: 100px;
  margin: 20px;
  justify-content: center;
  background-color: white;
}

button {
  height: 30px;
  background: #000;
  width: 100%;
  color: white;
  border: none;
  margin-bottom: auto;
  font-size:10px;
  font-family: 'Pokemon GB', sans-serif;
}

</style>