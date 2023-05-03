import React from 'react';
import  axios  from 'axios';
import { useState,useEffect } from 'react';
const HealthArticle = () => {
    const [data,setData]=useState("");
    useEffect(()=>{
   
            axios.get("https://newsdata.io/api/1/news?apikey=pub_21593c82f69cf0f3a0513253c2bb8d9ddc5b9&q=health&country=in&language=en&category=health")
            .then((Response)=>{
                console.log(Response)
               setData(Response.data.results);
            })
       
       
      
    },[]);
   
    return (
        <div className="Health-Article-container">
        <h2>Health Articles</h2>
        <div className="Health-Article-list">
        {data&&data.length > 0 ? (
    <ul>
      {data.map((item) => (
        <li key={item.pubDate}>
       <a href={item.link}target="_blank" rel="noopener noreferrer">
            <div className="Article-item">
              <div className="Article-item-info">
              <h3>{item.title.slice(0, 50)}</h3>
              <p>{item.description.slice(0, 100)}</p>
            
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
}

export default HealthArticle;
