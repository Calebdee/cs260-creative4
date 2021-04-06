<template>
  <div class="wrapper">
    <div class="pokemon">
      <div class="product" v-for="item in items" :key="item._id">
        <div class="info">
          <h1 class="teamName">{{ item.title }}</h1>

          <div class="pokeLine">
            <div class="teamMember">
              <h1> {{ item.pk1Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk1Pic}`" class="pokePic"/>
              </div>
              
            </div>
            <div class="teamMember">
              <h1> {{ item.pk2Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk2Pic}`" class="pokePic"/>
              </div>
              
            </div>
          <div class="teamMember">
              <h1> {{ item.pk3Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk3Pic}`" class="pokePic"/>
              </div>
              
            </div>

          <div class="teamMember">
              <h1> {{ item.pk4Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk4Pic}`" class="pokePic"/>
              </div>
              
            </div>

          <div class="teamMember">
              <h1> {{ item.pk5Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk5Pic}`" class="pokePic"/>
              </div>
              
          </div>

          <div class="teamMember">
              <h1> {{ item.pk6Name }} </h1>
              <div class="divider"></div>
              <div class="image">
                <img v-bind:src= "`https://www.${item.pk6Pic}`" class="pokePic"/>
              </div>
              
          </div>

          </div>
          <div id="entryText">
            <input v-model="item.title" type="text" class="titleOfTeam" placeholder="Enter a new team name">
            <button v-on:click="editTeam(item)" id="deleteButton">Edit Name</button>
          </div>
          <button v-on:click="deleteTeam(item)" id="deleteButton">Delete Team</button>
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
  },
   methods: {
    async getItems() {
      try {
        let response = await axios.get("api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editTeam(item) {
      try {
        await axios.put("/api/items/" + item._id, {
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
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
      test() {
      return this.$root.$data.cart.length;
      }
    },
}
</script>

<style scoped>

#deleteButton {
  border-radius: 5px;
  width: 150px;
}
.teamName {
  font-size: 22px;
}
.pokeLine {
  display: flex;
  
  
  max-width: 1010px;
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
  max-width: 1210px;
  max-height: 380px;
  background-color: white;
}

.pokemon {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.teamMember {
  border-radius: 25px;
  border: 1px solid black;
  width: 160px;
  margin: 10px;
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
  height: 310px;
  
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