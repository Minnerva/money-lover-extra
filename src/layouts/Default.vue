<template lang="pug">
  v-app#inspire
    container-menu
    v-toolbar(color="primary" dark fixed app)
      v-toolbar-side-icon(@click.stop="$store.state.drawer = !$store.state.drawer")
      v-toolbar-title Money Lover - Extra
    v-content
      router-view
</template>

<script>
  import ContainerMenu from '@components/container/Menu'

  export default {
    components: {
      ContainerMenu
    },
    mounted () {
      const { state, getters } = this.$store
      state.lastUpdate = getters.lastUploadFromLocal
    }
  }
</script>
