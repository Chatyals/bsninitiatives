import React from 'react';
import './latestnews.scss';
import { news } from '../../data';
const LatestNews = () => {
  return (
    <div>
      <div className="news">
        <div className="line2"></div>

        <div className="news-content">
          <h1>LATEST NEWS</h1>
          <div className="LN">
            {news.slice(0, 4).map((val) => {
              return (
                <div className="text">
                  <img
                    src={val.Image}
                    alt="news"
                    className="news-image"
                    style={{ width: '400px', height: '300px' }}
                  />

                  <a href="#">
                    <h4>{val.date}</h4>
                  </a>

                  <br />

                  <a href="#">
                    <h3>{val.news}</h3>
                  </a>

                  <a href="#">
                    <p className="para2">{val.article}</p>
                  </a>
                </div>
              );
            })}
          </div>
          <a href="#">
            <button>View more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
