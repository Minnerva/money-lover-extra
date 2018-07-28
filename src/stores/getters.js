export default {
  getDataFromLocal (state) {
    const data = window.localStorage.getItem(state.LOCAL_KEY_DATA)
    return data ? JSON.parse(data) : []
  },
  getLastUploadFromLocal (state) {
    const data = window.localStorage.getItem(state.LOCAL_KEY_UPDATE)
    return data ? JSON.parse(data) : 0
  }
}
