import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAxiosNews } from '../actions/newsActions';
import NewsCard from './components/NewsCard';

const News = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.news);
  const { news } = state;

  const [topic, setTopic] = useState('Present');
  useEffect(() => {
    dispatch(getAxiosNews(topic));
  }, []);

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAxiosNews(topic));
    setTopic('');
  };

  return (
    <div
      style={{
        display: 'flex',
        weight: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        padding: '1rem',
      }}
    >
      <h1>Last News</h1>
      <form onSubmit={handleSubmit}>
        <label> Choose a Topic: </label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            placeholder="Topic ..."
            onChange={handleChange}
            name="topic"
            value={topic}
            type="text"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Seacrch
          </button>
        </div>
      </form>

      <div>
        <NewsCard news={news} />
      </div>
    </div>
  );
};

export default News;
