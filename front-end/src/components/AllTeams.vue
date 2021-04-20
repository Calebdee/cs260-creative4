<template>
  <div class="wrapper">
    <div class="pokemon">
      
      <div class="product" v-for="item in items" :key="item._id">
        <div class="info">
          <h1 class="teamName">{{ item.title }}</h1>
          <h1 v-if=item.user class="teamName">Trainer: {{ item.user.firstName }} {{item.user.lastName}}</h1>

          <div class="pokeLine">
            <div class="teamMember">
              <h1> {{ item.pok1.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok1.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok1.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok1.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok1.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok1.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok1.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok1.SpeciesBaseSpeed}}</p>
    
              
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok1.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
            </div>
            <div class="teamMember">
              <h1> {{ item.pok2.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok2.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok2.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok2.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok2.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok2.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok2.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok2.SpeciesBaseSpeed}}</p>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok2.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
            </div>
          <div class="teamMember">
              <h1> {{ item.pok3.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok3.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok3.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok3.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok3.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok3.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok3.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok3.SpeciesBaseSpeed}}</p>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok3.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
            </div>

          <div class="teamMember">
              <h1> {{ item.pok4.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok4.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok4.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok4.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok4.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok4.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok4.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok4.SpeciesBaseSpeed}}</p>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok4.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
            </div>

          <div class="teamMember">
              <h1> {{ item.pok5.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok5.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok5.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok5.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok5.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok5.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok5.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok5.SpeciesBaseSpeed}}</p>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok5.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
          </div>

          <div class="teamMember">
              <h1> {{ item.pok6.SpeciesPokemonName }} </h1>
              <p class="entry">Type 1: {{item.pok6.SpeciesType1}}</p>
              <p class="entry">Type 2: {{item.pok6.SpeciesType2}}</p>
              <p class="entry">Base HP: {{item.pok6.SpeciesBaseHp}}</p>
              <p class="entry">Base Attack: {{item.pok6.SpeciesBaseAttack}}</p>
              <p class="entry">Base Defense: {{item.pok6.SpeciesBaseDefense}}</p>
              <p class="entry">Base Special: {{item.pok6.SpeciesBaseSpecial}}</p>
              <p class="entry">Base Speed: {{item.pok6.SpeciesBaseSpeed}}</p>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pok6.SpeciesImageUrl}`" class="pokePic"/>
              </div>
              
          </div>
          </div>
          </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AllTeams',
  props: {
    items: Array
  },
  data() {
    return {
      findItem: null,
      addItem: null,
      findTitle: "",
    }
  },
  created() {
    this.getItems();
    console.log("We try")
  },
   methods: {
    async getItems() {
      try {
        
        let response = await axios.get("api/teams");
        console.log(response)
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editTeam(item) {
      try {
        await axios.put("/api/teams/" + item._id, {
          title: item.title
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTeam(item) {
      try {
        await axios.delete("/api/teams/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
        this.$router.push("/")
      } catch (error) {
        this.$root.$data.user = null;
        this.$router.push("/")
      }
    },
  },
  computed: {
      test() {
      return this.$root.$data.cart.length;
      },
      user() {
      return this.$root.$data.user;
      },
    },
}
</script>

<style scoped>

#deleteButton {
  border-radius: 5px;
  width: 150px;
}
.entry {
  font-size: 8px;
  text-align: left;
  padding-left: 7px;
}
.teamName {
  font-size: 22px;
}
.pokeLine {
  display: flex;
  flex-wrap: wrap;
  
  max-width: 1310px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider {
  height: 10px;
  background-color: black;
}
.product {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  border: 3px solid black;
  border-radius: 25px;
  
  background-color: white;
}

.pokemon {
  margin-top: 20px;

  justify-content: center;
}

.teamMember {
  border-radius: 25px;
  border: 2px solid black;
  width: 160px;
  margin: 10px;
  background-color: white;
}


.image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  border-color: black;
  border-width: 2px;
  border: 1px solid black;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  
  }

#entryText {
  padding: 5px;
}

.pokemonTwo {
  margin: 10px;
  margin-top: 50px;
  background-color: white;
}
hr { background-color: black; height: 1px; border: 0; }

.pokemonTwo img {
  border: 2px solid #333;
  height: 250px;
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
  border-radius: 25px;
  border-top-right-radius: 25px;
  border: 2px solid black;
  border-width: 2px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px 30px;

  
}

.logger {
  background: #ff0000;
  font-family: 'Pokemon GB', sans-serif;
  border-radius: 25px;
  border-top-right-radius: 25px;
  border-width: 2px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  box-shadow: 5px 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px 30px;
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

  max-height: 70px;
  margin: 20px;
  justify-content: center;
  background-color: white;
  border-width: 2px;
  border-color: black;
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