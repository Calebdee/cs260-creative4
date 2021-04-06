<template>
<div>
  <TeamView :team="team" />
</div>
</template>

<script>
import TeamView from "../components/TeamView.vue"
export default {
  name: 'Team',
  components: {
    TeamView
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