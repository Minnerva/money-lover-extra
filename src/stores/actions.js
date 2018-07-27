import _ from 'lodash'

export default {
  cvsToData (vuex, text) {
    let data = []
    let keys = []
    text.split(`\n`).forEach((t, row) => {
      const rawData = t.split(`;`)
      if (row === 0) {
        /* Find Keys Object */
        keys = rawData.map(raw => _.camelCase(raw))
      } else {
        let d = {}
        rawData.forEach((value, index) => {
          d[keys[index]] = value
        })
        data.push(d)
      }
    })
    console.log(data)
    return data
  }
}
