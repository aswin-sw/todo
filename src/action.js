const ADD = 'ADD';

export const addTodo = todo => ({
  type: ADD,
  payload: todo
});
