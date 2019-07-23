import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
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
  addList (state,payload) {
    state.todoList.push({
      id: ++state.index,
      text: payload.text,
      complete: false
    })
    postHttp(payload);
  },
  deleteList (state,payload) {
    let index = state.todoList.findIndex(item => item.id == payload.id)
    state.todoList.splice(index,1)
  },
  changeState (state,payload) {
    let index = state.todoList.findIndex(item => item.id == payload.id)
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
        state.allItems.push(item)
        state.showItems.push(item)
    })
  }
}


const actions = {
  clearCompletedAsync (context) {
    setTimeout(() => {
      context.commit('clearCompleted')
    }, 1000);
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store