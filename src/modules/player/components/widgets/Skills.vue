<template>
  <widget id="skills">
    <div slot="content">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skills">
            <td class="title">{{ skill.title }}</td>
            <td class="value">{{ skill.value }}</td>
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
export default {
  name: 'skills',
  data () {
    return {
      skills: this.$store.getters['character/getSkills']
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
  text-align: left;
  padding: 2px 0;
}
td.value { text-align: center }
</style>