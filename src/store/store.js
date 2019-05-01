import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [],
    deviceCount: 0,
    fakeData: [
      {
        id: 0,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 10, change: 'down' }, { month: 'March', usage: 12, change: 'down' }, { month: 'February', usage: 14, change: 'down' }, { month: 'January', usage: 20, change: 'Device Installed' }
        ]
      },
      {
        id: 1,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 8, change: 'down' }, { month: 'March', usage: 10, change: 'down' }, { month: 'February', usage: 14, change: 'up' }, { month: 'January', usage: 11, change: 'Device Installed' }
        ]
      },
      {
        id: 2,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 15, change: 'down' }, { month: 'March', usage: 18, change: 'down' }, { month: 'February', usage: 20, change: 'down' }, { month: 'January', usage: 21, change: 'Device Installed' }
        ]
      },
      {
        id: 3,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 3, change: 'down' }, { month: 'March', usage: 4, change: 'down' }, { month: 'February', usage: 7, change: 'down' }, { month: 'January', usage: 8, change: 'Device Installed' }
        ]
      },
      {
        id: 4,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 5, change: 'down' }, { month: 'March', usage: 6, change: 'down' }, { month: 'February', usage: 8, change: 'down' }, { month: 'January', usage: 9, change: 'Device Installed' }
        ]
      },
      {
        id: 5,
        chart: 'chart',
        tableData: [
          { month: 'April', usage: 7, change: 'down' }, { month: 'March', usage: 8, change: 'down' }, { month: 'February', usage: 9, change: 'down' }, { month: 'January', usage: 12, change: 'Device Installed' }
        ]
      }
    ]
  },
  mutations: {
    addDeviceMutation(state, payload) {
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
