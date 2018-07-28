<template lang="pug">
  v-list-tile(@click="$router.push(menu.to)")
    v-list-tile-action
      v-icon(:color="color") fa-{{ menu.icon }}
    v-list-tile-content
      v-list-tile-title {{ menu.label }}
</template>

<script>
  export default {
    props: {
      menu: Object
    },
    data () {
      return {
        color: ``
      }
    },
    watch: {
      $route () {
        this.updateColor()
      }
    },
    methods: {
      updateColor () {
        const { name } = this.$route
        this.color  = name === this.menu.name ? `primary` : `grey lighten-2`
      }
    },
    mounted () {
      this.updateColor()
    }
  }
</script>
