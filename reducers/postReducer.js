const initialState = {
  posts: [],
  post: {},
  loading: false,
  page: 0,
};

export const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'POST_INITIAL_STATE':
      return {
        ...state,
        posts: actions.posts,
      };
    case 'POST_LOADING':
      return {
        ...state,
        loading: state.loading ? false : true,
      };
    case 'SET_PAGE_NEXT':
      return {
        ...state,
        page: state.page + 5,
      };

    case 'SET_PAGE_BACK':
      return {
        ...state,
        page: state.page - 5,
      };

    default:
      return state;
  }
};
