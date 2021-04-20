<template>
<div>
  <AllTeams :team="team" />
</div>
</template>

<script>
import AllTeams from "../components/AllTeams.vue"
export default {
  name: 'All',
  components: {
    AllTeams
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    team() {
      return this.$root.$data.cart;
    }
  },
}
</script>