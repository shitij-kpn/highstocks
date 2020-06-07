const dataDefaultState = {
  data: {},
  isPending: "",
  error: "",
};

export default (state = dataDefaultState, action = {}) => {
  switch (action.type) {
    case "REQUEST_QUERY_PENDING":
      return {
        ...state,
        isPending: true,
        error: "",
      };
    case "REQUEST_QUERY_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isPending: false,
      };
    case "REQUEST_QUERY_FAIL":
      return {
        ...state,
        error: action.payload,
        data: {},
        isPending: false,
      };
    default:
      return state;
  }
};
