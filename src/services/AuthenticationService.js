import Api from './Api'

export default {

  getAll(){
    return Api().get('/')
  },

  getUserMessages(userId){
    return Api().get(`/user/${userId}`)
  },

  getUserSettings(userId){
    return Api().get(`/user/${userId}/settings`)
  },

  updateUserSettings(userId, data){
    return Api().put(`/user/${userId}/settings/update`, data)
  },

  deleteMsg(messageId){
    return Api().delete(`/delete/message/${messageId}`)
  },

  deleteAllMessages(userId){
    return Api().delete(`/delete/messages/${userId}`)
  },

  deleteUser(userId){
    return Api().delete(`/delete/user/${userId}`)
  },

  register(credentials) {
    return Api().post('/new/user', credentials);
  },
  
  newMsg(msgData){
    return Api().post('/new/message', msgData)
  },
  
  login(credentials) {
    return Api().post('/login', credentials)
  },
  
  logOut(credentials) {
    return Api().get('/logout', credentials)
  }
}