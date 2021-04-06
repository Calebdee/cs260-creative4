<template>
  <div class="wrapper">

    <div class="pokemon">
      <div class="product" v-for="pokemonTwo in pokemon" :key="pokemonTwo.SpeciesID">
        <div class="info">
          <h1>{{ pokemonTwo.SpeciesPokemonName }}</h1>
        </div>
        <div class="price">
          <button class="auto" v-on:click="addCart(pokemonTwo)">
            Capture
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
export default {
  name: "PokemonView",
  props: {
    pokemon: Array,
  },
  computed: {
    pictureGet() {
      return `${this.pokemonTwo.SpeciesImageUrl}`;
    }
  },
  methods: {
    addCart(pokemonTwo) {
      var trigger = false;

      if (this.$root.$data.cart.length >= 6) {
        return;
      }
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i].SpeciesID == pokemonTwo.SpeciesID) {
          console.log("WE GOTTA MATCH");
          this.$root.$data.cart[i].quantity += 1;
          trigger = true;
        }
      }
      if (trigger == false) {
        pokemonTwo.quantity = 1;
        this.$root.$data.cart.push(pokemonTwo);
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product {
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  width: 160px;
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
  height: 50px;
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