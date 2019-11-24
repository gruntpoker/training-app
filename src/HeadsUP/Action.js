function Action(action) {
    const [actions, dispatch] = useReducer(actionsReducer, []);
  
    function handleAddClick(text) {
      dispatch({ type: 'add', text });
    }
}

export default Action