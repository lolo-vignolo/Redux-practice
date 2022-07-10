import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, nextPage, prevPage } from '../actions/asyncActions';

const Posts = () => {
  const dispatch = useDispatch();
  const newState = useSelector((state) => state.posts);

  const arrayPosta = newState.posts;

  const buttonBack = newState.page;

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleClickNext = () => {
    dispatch(nextPage());
  };

  const handleClicBack = () => {
    dispatch(prevPage());
  };

  return (
    <div style={{ marginTop: '1rem', marginLeft: '2rem' }}>
      <div>
        <h1>Posts</h1>
        <ul>
          {arrayPosta.map((post) => (
            <li key={post.name}>
              <h2>{post.name}</h2>
              <a href={post.url}>Know more about : {post.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <button
          className="btn btn-primary"
          onClick={handleClicBack}
          disabled={buttonBack < 5 ? true : false}
          style={{ marginRight: '1rem' }}
        >
          Back
        </button>

        <button className="btn btn-primary" onClick={handleClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
