export const initialState = {
  todosArr: [
    {item: 'Learn about reducers',
    complete: false,
    id: 1},
    {item: 'finish MVP',
    complete: false,
    id:2}
  ]
};

export const todoReducer = (state, action) => {
  console.log(state.todosArr)
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todosArr: [...state.todosArr, {
        id: Date.now(),
        item: action.playload,
        complete: false
      }]
    }
    case "TOGGLE_ITEM":
      return {
        ...state,
        todosArr: state.todosArr.map(item => 
        item.id === action.playload ? {...item, complete: !item.complete} : item
        )}
    case "CLEAR_COMPLETE":
      return {
        // ...state,
        todosArr: state.todosArr.filter(item => !item.complete)
      }
    default:
      return state;
  }
}