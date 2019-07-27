import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    todoItems: [],
}

const mutations = {
    addTodo: (state, todoItem) => {
        localStorage.setItem(todoItem, todoItem);
        state.todoItems.push(todoItem);
    }, removeAll: (state) => {
        localStorage.clear();
        state.todoItems = [];
    }, removeTodo: (state, {todoItem, index}) => {
        localStorage.removeItem(todoItem);
        state.todoItems.splice(index, 1);
    }
}

const actions = {
    addTodo: ({ commit }, todoItem) => { 
        commit('addTodo', todoItem)
    },
    removeAll: ({ commit }) => {
        commit('removeAll')
    },
    removeTodo: ({ commit }, { todoItem, index }) => {		
        commit('removeTodo', { todoItem, index });
    },
}
    
const getters = {
    getTodoItems: (state) => {
        return state.todoItems;
    }
}
    
    
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})
    

