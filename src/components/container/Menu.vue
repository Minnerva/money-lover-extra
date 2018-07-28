<template lang="pug">
  v-navigation-drawer(v-model="$store.state.drawer" fixed app)
    v-toolbar(flat color="primary" dark)
      v-toolbar-title Money Lover - Extra
      v-spacer
      v-btn(icon @click="toMyGitHub")
        v-icon fab fa-github
    v-divider
    v-list(dense)
      template(v-for="menu in menus")
        template(v-if="!menu.subs")
          item-menu(:key="menu.label" :menu="menu")
        template(v-else)
          v-list-group(:key="menu.label" :prepend-icon="`fa-${menu.icon}`" :value="false")
            v-list-tile(slot="activator")
              v-list-tile-title {{ menu.label }}
            v-list-tile(v-for="sub in menu.subs")
              v-list-tile-title ABC
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
          { icon: 'home', label: 'Home', name: 'index', to: '/'},
          { icon: 'upload', label: 'Upload File', name: 'upload', to: '/upload'},
          {
            icon: 'file-invoice-dollar',
            label: 'Report',
            to: '',
            subs: [
                ''
              ]
            }
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
