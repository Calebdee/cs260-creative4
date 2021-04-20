<template>
<div id="app">

  <div id="menu">

    <div id="brand">
    <p v-if="user">Welcome, {{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt fa-lg"></i></a></p>

      <h1>Pokemon Team Builder</h1>
      

      <router-link to="/">
        <div class="icon">
        <i class="fas fa-home fa-lg"></i>
        </div>
      </router-link>
      <div v-if="user">
      <router-link to="/team" >
        <div class="icon">
        <i class="fas fa-user fa-lg"></i>
        </div>
      </router-link>
      </div>

        <router-link to="/all">
        <div class="icon">
          <i class="fas fa-globe fa-lg"></i>
        </div>
      </router-link>
    </div>
   
    <div id="side">
      
    </div>
    <div id="first">
      
    </div>
  </div>
  <router-view />
  <hr>
  <p><em>Find Code At: <a href="https://github.com/Calebdee/cs260-creative3"> GitHub</a></em></p>

</div>


</template>

<script>
//src="https://kit.fontawesome.com/your-code-number.js"
import axios from 'axios';
export default {
  name: 'App',
  computed: {
    user() {
        return this.$root.$data.user;
      },
  },
  methods: {
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
  }
}

</script>

<style>

@import url('http://fonts.cdnfonts.com/css/intro');
@import url(//db.onlinewebfonts.com/c/831e1f4da157d96bc996f8c9f5f1e578?family=Pokemon+GB);

* {
  box-sizing: border-box;
}

html {
	height: 100%;
	/* max-height: 600px; */
	width: 100%;
	background-color: hsla(200,40%,30%,.4);
	background-image:		
		url('https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png'), 
		url('https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png'),
		url('https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png'),
		url('https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png'),
		url('https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png');
	background-repeat: repeat-x;
	background-position: 
		0 20%,
		0 100%,
		0 50%,
		0 100%,
		0 0;
	background-size: 
		2500px,
		800px,
		500px 200px,
		1000px,
		400px 260px;
	animation: 50s para infinite linear;
	}

@keyframes para {
	100% {
		background-position: 
			-5000px 20%,
			-800px 95%,
			500px 50%,
			1000px 100%,
			400px 0;
		}
	}

body {
  margin: 10px 10px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "first brand side";
  margin-bottom: 50px;
background-color: #ff0000;

  border-radius: 25px;
  font-family: 'Pokemon GB', sans-serif;

  box-shadow: 5px 10px;
  
}


#brand {
  grid-area: brand;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  
  justify-content: center;
  font-family: 'Pokemon GB', sans-serif;

}

.icon {

  padding: 10px;
}

.fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.show {
  flex: 100%;
}

#brand p {
  font-size: 10px;
  }

#brand img {
  height: 120px;
}

#side {
  grid-area: side;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
}

#first {
  grid-area: first;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  }

#first img {
  width: 50px;
  }

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

</style>