import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: []
} // 변수

const getters = {
  completeRate (state) {
    var todosLength = state.todos.length
    var completedTodosCount = 0

    for (var i = 0; i < todosLength; i++) {
      if (state.todos[i].isCompleted === true) {
        completedTodosCount++
      }
    }

    if (todosLength === 0) {
      return 0
    } else {
      return completedTodosCount / todosLength * 100
    }
  }
} // 변수를 변환해서 Reactive하게 출력

const mutations = {
  addTodo (state, title) {
    state.todos.push({
      title: title,
      isCompleted: false
    })
  },
  completeTodo (state, key) {
    state.todos[key].isCompleted = true
  }
} // 변수를 조작 state만 쓸 수 잇는 함수 (commit)

const actions = {} // 짬뽕 함수 (dispatch)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
