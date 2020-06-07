const queryDefaultState = {
  queryField: "",
};

export default (state = queryDefaultState, action = {}) => {
  switch (action.type) {
    case "QUERY_CHANGE":
      return {
        ...state,
        queryField: action.payload,
      };
    default:
      return state;
  }
};
