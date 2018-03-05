<template>
  <widget id="abilities" class="white box">
    <div slot="content">
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="score">Score</th>
            <th>Mod</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ability in abilities">
            <td>{{ ability.name }}</td>
            <td class="score">{{ ability.value }}</td>
            <td>{{ ability.mod }}</td>
            <td>{{ ability.save }}</td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </div>
  </widget>
</template>

<script>
import widget from './Widget'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'abilities',
  data () {
    return {
      abilities: this.$store.getters['character/getAbilityScores']
    }
  },
  components: { widget }
}
</script>

<style scoped>
table {
  width: 100%;
}
td, th {
  font-size: 14px;
  font-family: "Lucida Console", Monaco, monospace;
  text-align: right;
}
td.score, th.score {
  text-align: center;
}
td:first-child, th:first-child {
  text-align: left;
}
</style>