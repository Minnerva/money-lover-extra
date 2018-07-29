import _ from 'lodash'

export default {
  getDataFromLocal (state) {
    const data = window.localStorage.getItem(state.LOCAL_KEY_DATA)
    return data ? JSON.parse(data) : []
  },
  getLastUploadFromLocal (state) {
    const data = window.localStorage.getItem(state.LOCAL_KEY_UPDATE)
    return data ? JSON.parse(data) : 0
  },
  total () {
    return data => { _.reduce(data, (total, d) => total + d.amount) }
  },
  filterIncome () {
    return data => {
      let total = 0
      const income = _.filter(data, d => d.amount > 0)
      income.forEach(({ amount }) => {
        total += amount
      })
      return total
    }
  },
  filterExpense () {
    return data => {
      let total = 0
      const income = _.filter(data, d => d.amount < 0)
      income.forEach(({ amount }) => {
        total += amount
      })
      return total
    }
  }
}
