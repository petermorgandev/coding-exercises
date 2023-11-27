import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [],
    deviceCount: 0,
    fakeData: [
      {
        id: 0,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 10, change: 'down' }, { month: '03/19', usage: 12, change: 'down' }, { month: '02/19', usage: 14, change: 'down' }, { month: '01/19', usage: 20, change: 'Device Installed' }
        ]
      },
      {
        id: 1,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 8, change: 'down' }, { month: '03/19', usage: 10, change: 'down' }, { month: '02/19', usage: 14, change: 'up' }, { month: '01/19', usage: 11, change: 'Device Installed' }
        ]
      },
      {
        id: 2,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 15, change: 'down' }, { month: '03/19', usage: 18, change: 'down' }, { month: '02/19', usage: 20, change: 'down' }, { month: '01/19', usage: 21, change: 'Device Installed' }
        ]
      },
      {
        id: 3,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 3, change: 'down' }, { month: '03/19', usage: 4, change: 'down' }, { month: '02/19', usage: 7, change: 'down' }, { month: '01/19', usage: 8, change: 'Device Installed' }
        ]
      },
      {
        id: 4,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 5, change: 'down' }, { month: '03/19', usage: 6, change: 'down' }, { month: '02/19', usage: 8, change: 'down' }, { month: '01/19', usage: 9, change: 'Device Installed' }
        ]
      },
      {
        id: 5,
        chartData: [2, 4, 6, 5, 3, 5, 4],
        tableData: [
          { month: '04/19', usage: 7, change: 'down' }, { month: '03/19', usage: 8, change: 'down' }, { month: '02/19', usage: 9, change: 'down' }, { month: '01/19', usage: 12, change: 'Device Installed' }
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
