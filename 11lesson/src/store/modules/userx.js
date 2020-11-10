export default {
  actions: {
    //в actions 1-й парам это всегда контекст, а 2-й ч.л еще
    async fetchUsers(context, secondUrl = 'users') {
      const result = await fetch('https://api.github.com/' + secondUrl)
      const receivedUsers = await result.json()

      context.commit('updateUsers', receivedUsers) //в метод commit передаем название мутации которую хотим вызвать, 2-м параметром данные для этой мутации для arrUsers
    },
  },
  mutations: {
    //stat меняется через mutations
    //первый парам.всегда state
    updateUsers(state, arrUsers) {
      state.users = arrUsers
    },
    //второй параметр это те данные кот.мы передаем
    deleteAllUsers(state) {
      state.users = []
    },
    deleteOneUser(state, id) {
      state.users = state.users.filter(item => item.id !== id)
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users
    },
  },
}
