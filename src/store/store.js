import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [], 
    deviceCount: 0
  },
  mutations: {
    addDeviceMutation (state, payload) {
      state.devices.push(payload);
      state.deviceCount++;
    }
  },
  actions: {
    addDeviceAction: (context, payload) => {
      context.commit('addDeviceMutation', payload)
    }
  }
})
