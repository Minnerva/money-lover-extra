<template lang="pug">
  v-navigation-drawer(v-model="$store.state.drawer" fixed app)
    v-toolbar(flat color="primary" dark)
      v-toolbar-title Money Lover - Extra
      v-spacer
      v-btn(icon @click="toMyGitHub")
        v-icon fab fa-github
    v-divider
    v-list(dense)
      item-menu(v-for="menu in menus" :key="menu.label" :menu="menu")
</template>

<script>
  import ItemMenu from '@components/item/Menu'
  export default {
    components: {
      ItemMenu 
    },
    data () {
      return {
        menus: [
          { icon: 'home', label: 'Home', name: 'index', to: ''},
          { icon: 'home', label: 'A', to: ''},
          { icon: 'home', label: 'B', to: ''}
        ]
      }
    },
    methods: {
      toMyGitHub () {
        window.open(`https://github.com/Minnerwa/money-lover-extra`, `_blank`)
      }
    }
  }
</script>
