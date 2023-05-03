import React from 'react';
import  axios  from 'axios';
import { useState,useEffect } from 'react';
const HealthArticle = () => {
    const [data,setData]=useState("");
    useEffect(()=>{
        const getArticle=()=>{
            axios.get(" https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=cccdf2d38c91469790dc4b73f76bd7d0")
            .then((Response)=>{
                console.log(Response)
               setData(Response.data.articles);
            })
        }
       
        getArticle();
    },[]);
   
    return (
        <div className="Health-Article-container">
        <h2>Health Articles</h2>
        <div className="Health-Article-list">
        {data.length > 0 ? (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
       <a href={item.url}target="_blank" rel="noopener noreferrer">
            <div className="Article-item">
              <div className="Article-item-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            
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
