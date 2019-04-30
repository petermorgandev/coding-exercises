import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [
      /* { id:1, floor: 'Upstairs', location: 'Bathroom', type: 'Toilet' },
      { id:2, floor: 'Basement', location: 'Bathroom', type: 'Sink' },
      { id:3, floor: 'Upstairs', location: 'Bathroom', type: 'Shower' },
      { id:4, floor: 'Downstairs', location: 'Kitchen', type: 'Sink' },
      { id:5, floor: 'Downstairs', location: 'Bathroom', type: 'Toilet' },
      { id:6, floor: 'Downstairs', location: 'Bathroom', type: 'Sink' } */
    ], 
    deviceCount: 0
  },
  mutations: {
    addDeviceMutation (state, payload) {
      state.devices.push(payload)
    }
  },
  actions: {
    addDeviceAction: (context, payload) => {
      context.commit('addDeviceMutation', payload)
    }
  }
})
