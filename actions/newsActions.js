import axios from 'axios';

const getNews = (news) => {
  return {
    type: 'GET_NEWS',
    payload: news,
  };
};

const getNewsLoading = () => {
  return {
    type: 'GET_NEWS_LOADING',
  };
};

const setError = (error) => {
  return {
    type: 'SET_ERROR',
    payloas: error,
  };
};

const KEY = import.meta.env.VITE_API_KEY;
console.log(KEY);

export const getAxiosNews = (topic) => {
  return (dispatch) => {
    dispatch(getNewsLoading());
    axios
      .get('https://newsapi.org/v2/everything', {
        params: {
          q: topic,
          from: '2022 - 06 - 10',
          sortBy: 'publishedAt',
          pageSize: 10,
          apiKey: KEY,
        },
      })
      .then((response) => {
        console.log(response.data.articles);
        dispatch(getNews(response.data.articles));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};
