<template>
  
  <div>
    <div id = "holder">
      <div class="add">
        <form>
        <p>Must have a full team of 6 Pokemon to save. Current team size is {{teamSize}}.</p>
        <p>
        <input type="text" id="titleOfTeam" placeholder="Enter a team name">
        </p>
        <button v-on:click="saveTeam">Save Team</button>
        <button v-on:click="clearTeam">Clear Team</button>
        </form>
      </div>
      
    </div>
    <PokemonView :pokemon="pokemon"/>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import PokemonView from '@/components/PokemonView.vue'
export default {
  name: 'Home',
  components: {
    PokemonView
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon;
    },
    teamSize() {
      return this.$root.$data.cart.length;
    },
    
  },
  methods: {
    async saveTeam() {
      let event = this.$root.$data.cart
      try {
        await axios.post('api/items', {
          title: document.getElementById("titleOfTeam").value,
          pk1Name: event[0].SpeciesPokemonName,
          pk1Pic: event[0].SpeciesImageUrl,
          pk2Name: event[1].SpeciesPokemonName,
          pk2Pic: event[1].SpeciesImageUrl,
          pk3Name: event[2].SpeciesPokemonName,
          pk3Pic: event[2].SpeciesImageUrl,
          pk4Name: event[3].SpeciesPokemonName,
          pk4Pic: event[3].SpeciesImageUrl,
          pk5Name: event[4].SpeciesPokemonName,
          pk5Pic: event[4].SpeciesImageUrl,
          pk6Name: event[5].SpeciesPokemonName,
          pk6Pic: event[5].SpeciesImageUrl,
        });
      } catch(error) {
        console.log(error);
      }
    },
    clearTeam() {
      this.$root.$data.cart = []
    }
  }
}
</script>

<style scoped>

#holder {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.add {
  background-color: red;
  border-radius: 10px;
  border-width: 1px;
  text-align: center;
  padding: 10px;
  max-width: 500px;
  box-shadow: 5px 10px;
  font-family: 'Pokemon GB', sans-serif;
}
 
</style>