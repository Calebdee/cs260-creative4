<template>
  
  <div>
    <div id = "holder" v-if="user">
      <div class = "newHolder">
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
        <PokemonView :pokemon="pokemon"/>
      </div>
      
    </div>
    <Login v-else/>
    
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import Login from '@/components/Login.vue';
import PokemonView from '@/components/PokemonView.vue'
export default {
  name: 'Home',
  components: {
    PokemonView,
    Login
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon;
    },
    user() {
      return this.$root.$data.user;
    },
    teamSize() {
      return this.$root.$data.cart.length;
    },
    
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async saveTeam() {
      let event = this.$root.$data.cart
      console.log(this.$root.$data.user.userName);
      try {
        await axios.post('api/teams', {
          title: document.getElementById("titleOfTeam").value,
          user: this.$root.$data.user,
          pk1Name: event[0].SpeciesPokemonName,
          pk2Name: event[1].SpeciesPokemonName,
          pk3Name: event[2].SpeciesPokemonName,
          pk4Name: event[3].SpeciesPokemonName,
          pk5Name: event[4].SpeciesPokemonName,
          pk6Name: event[5].SpeciesPokemonName,
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

.newHolder {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.add {
  background-color: red;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  border-width: 1px;
  text-align: center;
  padding: 10px;
  max-width: 500px;
  box-shadow: 5px 10px;
  font-family: 'Pokemon GB', sans-serif;
}
 
</style>