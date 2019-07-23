import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


const state = {
  name: '',
  todoList: [
    
  ],
  index: 3
}

const getters = {
  unComplete (state) {
    return state.todoList.filter(item => !item.complete).length
  }
}

const mutations ={

  setName(state, name) {
    state.name = name
  },

  deleteData (state,payload){
    let index = state.todoList.findIndex(item => item.id == payload.id);
    state.todoList.splice(index,1);
  },

  changeState (state,index) {
    state.todoList[index].complete = !state.todoList[index].complete
  },

  clearCompleted (state) {
    state.todoList = state.todoList.filter(item => !item.complete)
  },

  initData(state,data){
    data.forEach(e => {
        let item = {
            id: e.id,
            text: e.text,
            complete: e.complete
            }
        state.todoList.push(item)
    })
  }
}


const actions = {
  async clearCompletedAsync (context) {
    axios({
      method: 'delete',
      url: 'http://localhost:8080/todo-mvcs/',
    }).then((response)=>{
      context.commit('clearCompleted')
    })
  },

  async getHttpAsync(context){
    axios({
      method: 'get',
      url: 'http://localhost:8080/todo-mvcs',
    }).then((response)=>{
      context.commit('initData', response.data)
    })
  },

  async addList (state,payload) {
    state.state.todoList.push({
      id: ++state.state.index,
      text: payload.text,
      complete: false
    });
    axios({
      method: 'post',
      url: 'http://localhost:8080/todo-mvcs',
      data: {
        "id": state.state.index,
        "text": payload.text,
        "complete": false
      }
    });
  },

  async deleteListAsync (state,context) {
    axios({
      method: 'delete',
      url: 'http://localhost:8080/todo-mvcs/' + context.id,
    }).then((response)=>{
      this.commit('deleteData', state.state)
    });
  },

  async changeStateAsync (state,context){
    let index = state.state.todoList.findIndex(item => item.id == context.id)
    axios({
      method: 'put',
      url: 'http://localhost:8080/todo-mvcs/' + context.id,
      data: {
        "id": state.state.todoList[index].id,
        "text": state.state.todoList[index].text,
        "complete": !state.state.todoList[index].complete
      }
    }).then((response)=>{
      this.commit('changeState', index)
    });
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store