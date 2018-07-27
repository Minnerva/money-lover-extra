<template lang="pug">
  v-container(fuild grid-list-sm)
    v-layout(row wrap)
      v-flex(justify-start xs12 md6)
        input.hidden(type="file" ref="upload" @change="selectedFile")
        v-btn.ml-0(color="primary" @click="browse") Browse
        span {{ fileName }}
      v-flex(xs12 md6)
        v-btn(color="secondary" block :disabled="!cvs") Get Report
</template>

<script>
  export default {
    data () {
      return {
        cvs: ``,
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
              this.cvs = data
            })
          }
        } else {
          this.fileName = ``
          this.cvs = ``
        }
      }
    }
  }
</script>
