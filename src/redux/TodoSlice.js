import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {favorite: false, text: 'Купиты продукты', done: true},
    {favorite: true, text: 'Купиты бананы', done: false},
    {favorite: false, text: 'Купиты машину', done: false},
    {favorite: true, text: 'Купиты дом', done: false},
    {favorite: false, text: 'Купиты участок', done: false}
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   deleteTodo:  (state, action) => {
    state.todos = state.todos.filter((todo, index) => {
        if (index === action.payload.index) {
          return false
        }
        return true
      })
    },

    makeFavorite: (state, action) => {
      state.todos = state.todos.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            favorite: !item.favorite
          }
        }
        return item;
      })
    },

   addTodo:(state, action) => {


     state.todos = [
       {
       text: action.payload.text,
       favorite: false,
       done: action.payload.check
     },
       ...state.todos
     ]
      action.payload.setText('');
      action.payload.setCheck(false);
    }
    },
})

export const { deleteTodo, makeFavorite, addTodo } = counterSlice.actions

export default counterSlice.reducer