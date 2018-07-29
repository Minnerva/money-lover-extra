<template lang="pug">
  div
    container-overview(v-for="(account, key) in accounts" :key="key" :title="key" :data="account")
</template>

<script>
  import _ from 'lodash'
  // import Chart from 'chart.js'
  import ContainerOverview from '@components/container/Overview'

  export default {
    components: {
      ContainerOverview
    },
    data () {
      return {
        accounts: []
      }
    },
    mounted () {
      const { getters } = this.$store
      const data = getters.dataFromLocal
      if (data.length <= 0) {
        this.$router.replace('/upload')
      } else {
        const accounts = _.groupBy(data, 'account')
        this.accounts = { All: data, ...accounts}
        console.log(this.accounts)
      }
    }
  }
</script>
