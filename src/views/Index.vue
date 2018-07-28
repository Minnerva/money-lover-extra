<template lang="pug">
  div
</template>

<script>
  export default {
    mounted () {
      const { getters } = this.$store
      const data = getters.getDataFromLocal
      if (data.length <= 0) {
        this.$router.replace('/upload')
      }
    }
  }
</script>


