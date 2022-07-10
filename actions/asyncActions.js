// const initialState = {
//     posts: [],
//     post: {},
//     loading: false,
//     page: 0,
//   };

import axios from 'axios';

const postInitialState = (statleArray) => {
  return {
    type: 'POST_INITIAL_STATE',
    posts: statleArray,
  };
};

const postLoading = () => {
  return {
    type: 'POST_LOADING',
  };
};

//thnk
export const getAllPosts = (page = 0) => {
  return (dispatch) => {
    dispatch(postLoading());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${page}`)
      .then((res) => {
        dispatch(postInitialState(res.data.results));
        dispatch(postLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(postLoading());
      });
  };
};

const setPage = () => {
  return {
    type: 'SET_PAGE_NEXT',
  };
};

const setPageBack = () => {
  return {
    type: 'SET_PAGE_BACK',
  };
};

export const nextPage = () => {
  return (dispatch, getState) => {
    dispatch(postLoading());
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${
          getState().posts.page + 5
        }`
      )
      .then((res) => {
        dispatch(postInitialState(res.data.results));
        dispatch(setPage());
        dispatch(postLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(postLoading());
      });
  };
};

export const prevPage = () => {
  return (dispatch, getState) => {
    dispatch(postLoading());
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${
          getState().posts.page - 5
        }`
      )
      .then((resp) => {
        dispatch(postInitialState(resp.data.results));
        dispatch(setPageBack());
        dispatch(postLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(postLoading());
      });
  };
};
