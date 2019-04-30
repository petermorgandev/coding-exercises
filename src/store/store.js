import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testString: 'this is a test string',
    testArray: ['John', 'Steve', 'Bill'],
    devices: [
      { name: 'Island', location: 'kitchen', type: 'sink' },
      { name: 'Upstairs', location: 'bathroom', type: 'sink' },
      { name: 'Upstairs', location: 'bathroom', type: 'toilet' },
      { name: 'Upstairs', location: 'bathroom', type: 'shower' },
      { name: 'Downstairs', location: 'bathroom', type: 'toilet' },
      { name: 'Downstairs', location: 'bathroom', type: 'sink' }
    ]
  },
  mutations: {
    addDevice: state => {
      state.devices.push({ name: 'submitted', location: 'add.vue', type: 'button press' })
    }
  },
  actions: {
    addDevice: context => {
      context.commit('addDevice')
    }
  }
})
