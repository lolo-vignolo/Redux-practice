import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <>
      {news.map((item, index) => {
        return (
          <div
            key={index}
            className="card"
            style={{ width: '18rem', marginBottom: '2rem' }}
          >
            <img src={item.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.description}
                <span>{item.author}</span>
              </p>

              <a href={item.url} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
