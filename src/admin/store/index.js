import { createStore } from 'vuex';

export default createStore({
  state: {
    adminMessage: 'Hello, Admin Vuex!',
  },
  mutations: {
    setAdminMessage(state, newMessage) {
      state.adminMessage = newMessage;
    },
  },
  actions: {
    updateAdminMessage({ commit }, newMessage) {
      commit('setAdminMessage', newMessage);
    },
  },
  getters: {
    adminMessage: (state) => state.adminMessage,
  },
});
