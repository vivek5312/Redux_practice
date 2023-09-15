const redux = require('redux');

// Define your reducer
const counterReducer = (state = { count: 2}, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
    };
  }  if (action.type === 'DECREMENT') { 
    return {
      count: state.count - 1,
    };
  }
  return state;
};

// Create a Redux store
const store = redux.createStore(counterReducer);
const counterSubscriber=()=>{
  const currentState = store.getState();
console.log(currentState);
}
store.subscribe(counterSubscriber);
// Dispatch an action to increment the count
store.dispatch({ type: 'INCREMENT' });

// Dispatch an action to decrement the count
store.dispatch({ type: 'DECREMENT' });


