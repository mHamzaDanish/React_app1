

const number_reducer= (state, action)=> {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
    }
  }

  export default number_reducer;