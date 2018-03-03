<template>
  <div class="abilities widget short">
    <table>
      <thead>
      </thead>
      <tbody v-for="ability in abilities">
        <tr>
          <td>{{ ability.name }}</td>
          <td>{{ ability.value }}</td>
        </tr>
      </tbody>
      <tfoot>
    </tfoot>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'Abilities',
  data () {
    return {
      abilities: this.$store.getters['character/getAbilityScores']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
