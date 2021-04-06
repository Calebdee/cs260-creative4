<template>
<div>
  <RandomView :cart="cart" />
</div>
</template>

<script>
import RandomView from "../components/RandomView.vue"
export default {
  name: 'Random',
  components: {
    RandomView
  },
  data() {
    return {
      country: '',
    }
  },
  methods: {
        getInt() {
            return Math.random() * (1 - 151) + 151;
        },

  },
  computed: {
        cart() {
        var team = []
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);
        team.push(this.$root.$data.pokemon[Math.floor(Math.random() * 152)]);

        return team;
    }
  },
}
</script>