const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case 'GET_NEWS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      state;
  }

  return state;
};
