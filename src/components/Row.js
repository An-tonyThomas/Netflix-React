import React,{useEffect, useState} from 'react';
import baseURL from '../baseUrl';
import './Row.css';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {
    const [movies,setMovies]=useState([])
    async function fetchData(){
      const result= await baseURL.get(fetchUrl)
      setMovies(result.data.results);
    }

    useEffect(()=>{
            fetchData()
    },[])
    console.log(movies);
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='posters'>
            {
                movies.map((movie)=>(
                    <img key={movie.name} className='poster' src={`${base_url}${movie.backdrop_path}`}alt={movie.name}/>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Row