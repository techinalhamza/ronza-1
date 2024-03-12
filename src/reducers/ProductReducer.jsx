const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SET_API_DATA": {
      const featureProductsData = action.payload.filter((curElem) => {
        return curElem.feature === true;
      });
    }
    case "API_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }
  }
  return state;
};
export default productReducer;
