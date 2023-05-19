import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthArticle = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://newsdata.io/api/1/news?apikey=pub_21593c82f69cf0f3a0513253c2bb8d9ddc5b9&q=health&country=in&language=en&category=health")
      .then((response) => {
       setData(response.data.results);
      });
  }, []);

  return (
    <div className="Health-Article-container">
      <h2 style={{color:'aliceblue'}}>Latest in Healthcare</h2>
      <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}className='Health-Article-Search'/>
      <div className="Health-Article-list">
        {data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? (
          <ul>
            {data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
              <li key={item.pubDate}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="Article-item">
                    <div className="Article-item-info">
                      <h3>{item.title}</h3>
                      <p>{item.description.slice(0, 120)}...more</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Article found.</p>
        )}
      </div>
    </div>
  );
};

export default HealthArticle;
