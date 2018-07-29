<template lang="pug">
  v-container(fuild grid-list-sm)
    v-layout(row wrap)
      v-flex(justify-start xs12 md6)
        input.hidden(type="file" ref="upload" @change="selectedFile")
        v-btn.ml-0(color="primary" @click="browse") Browse
        span {{ fileName }}
      v-flex(xs12 md6)
        v-btn(color="secondary" block :disabled="!displayData.length" @click="getReport") Get Report
      v-flex.mt-3(v-if="displayData.length" xs12)
        v-layout(row wrap)
          v-flex(xs12 text-xs-center).title Example Data
          v-flex(xs3 text-xs-center) Category
          v-flex(xs3 text-xs-center) Amount
          v-flex(xs6 text-xs-center) Note
        v-divider
        v-layout(v-for="data in displayData" :key="data.id" row wrap)
          v-flex(xs3) {{ data.category }}
          v-flex(xs3 text-xs-right) {{ data.amount }}
          v-flex(xs6) {{ data.Note }}
</template>

<script>
  export default {
    data () {
      return {
        data: ``,
        displayData: [],
        fileName: ``
      }
    },
    methods: {
      browse () {
        this.$refs.upload.click()
      },
      selectedFile () {
        const { dispatch } = this.$store
        const { upload } = this.$refs
        if (upload.files.length > 0) {
          const file = upload.files[0]
          this.fileName = file.name
          const reader = new FileReader()
          reader.readAsText(file)
          reader.onload = () => {
            dispatch(`cvsToData`, reader.result).then(data => {
              this.data = data
              this.displayData = data.splice(0, 10)
            })
          }
        } else {
          this.fileName = ``
          this.data = ``
          this.displayData = []
        }
      },
      async getReport () {
        const { state, getters, dispatch } = this.$store
        await dispatch('setDataToLocal', this.data)
        await dispatch('setLastUploadToLocal')
        window.location.href = '/'
      }
    }
  }
</script>
