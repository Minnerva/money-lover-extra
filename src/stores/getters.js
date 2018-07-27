export default {
  getDataFromLocal (state) {
    const data = window.localStorage.getItem(state.MONEY_EXTRA)
    return data ? JSON.parse(data) : []
  }
}
