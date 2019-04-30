import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testString: 'this is a test string',
    testArray: ['John', 'Steve', 'Bill'],
    devices: [
      { id:1, floor: 'Upstairs', location: 'Bathroom', type: 'Toilet' },
      { id:2, floor: 'Basement', location: 'Bathroom', type: 'Sink' },
      { id:3, floor: 'Upstairs', location: 'Bathroom', type: 'Shower' },
      { id:4, floor: 'Downstairs', location: 'Kitchen', type: 'Sink' },
      { id:5, floor: 'Downstairs', location: 'Bathroom', type: 'Toilet' },
      { id:6, floor: 'Downstairs', location: 'Bathroom', type: 'Sink' }
    ],
    deviceCount: 0
  },
  mutations: {
    addDevice: state => {
      state.devices.push({ id: state.deviceCount++, floor: 'submitted', location: 'add.vue', type: 'button press' })
    }
  },
  actions: {
    addDevice: context => {
      context.commit('addDevice')
    }
  }
})
