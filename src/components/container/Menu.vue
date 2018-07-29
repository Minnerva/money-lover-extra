<template lang="pug">
  v-navigation-drawer(v-model="$store.state.drawer" fixed app)
    v-toolbar(flat color="primary" dark)
      v-toolbar-title Money Lover - Extra
      v-spacer
      v-btn(icon @click="toMyGitHub")
        v-icon fab fa-github
    v-divider
    v-list(dense)
      v-list-tile
        v-list-tile-content
          v-list-tile-title Last Update: {{ displayDate(lastUpdate) }}
      template(v-for="menu in menus")
        template(v-if="!menu.subs")
          item-menu(:key="menu.label" :menu="menu")
        template(v-else)
          v-list-group(:key="menu.label" :prepend-icon="`fa-${menu.icon}`" :value="false")
            v-list-tile(slot="activator")
              v-list-tile-title {{ menu.label }}
            v-list-tile(v-for="sub in menu.subs" :key="sub.group")
              v-list-tile-title {{ sub.label }}
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import ItemMenu from '@components/item/Menu'

  export default {
    components: {
      ItemMenu 
    },
    computed: {
      lastUpdate () {
        return this.$store.state.lastUpdate
      }
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
            subs: []
          }
        ]
      }
    },
    methods: {
      toMyGitHub () {
        window.open(`https://github.com/Minnerwa/money-lover-extra`, `_blank`)
      },
      displayDate (date) {
        const m = moment(date)
        return m.format(`DD MMM YYYY HH:mm`)
      }
    },
    mounted () {
      const data = this.$store.getters.dataFromLocal
      const groups = _.groupBy(data, 'dateGroup')
      let dateGroups = []
      _.forIn(groups, (values, key) => {
        dateGroups.push({
          group: key,
          label: moment(key, `YYYY-MM`).format(`YYYY MMMM`),
          items: values
        })
      })
      this.menus[2].subs = dateGroups
    }
  }
</script>
