<template lang="pug">
  div
    container-overview(v-for="(account, key) in accounts" :key="key" :title="key" :data="account")
</template>

<script>
  import _ from 'lodash'
  import ContainerOverview from '@components/container/Overview'

  export default {
    components: {
      ContainerOverview
    },
    data () {
      return {
        accounts: {}
      }
    },
    watch: {
      $route () {
        this.init()
      }
    },
    methods: {
      init () {
        const { getters } = this.$store
        const { group } = this.$route.params
        const data = _.filter(getters.dataFromLocal, { dateGroup: group })
        const accounts = _.groupBy(data, 'account')
        this.accounts = { All: data, ...accounts}
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
