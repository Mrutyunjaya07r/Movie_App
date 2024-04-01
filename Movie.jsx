
import React, { useEffect, useState } from 'react'
import Moviecard from "./Moviecard";
import axios from 'axios';
import Page from './Page';

function Movie({handleaddtowatchlist}) {
  const [movies,setMovies]=useState([]);
  const [pageNo,setPageNo]=useState(1);
  const handlePrevious=()=>{
    if(pageNo==1){
      setPageNo(1);
    }
    setPageNo(pageNo-1);
  }
  const handleNext=()=>{
    setPageNo(pageNo+1);
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d53c6ca01390c512b297e70feb3fe15f&include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`).then(function(res){
      console.log(res.data.results);
     setMovies(res.data.results);
     
    })
  },[pageNo])
  return (
    <div className="container my-4">
            <h2>Trending movie</h2>
      <div className='row'>
      {movies.map((movieObj)=>{
        return <div className='col-md-3'>
                <Moviecard key={movieObj} poster_path={movieObj.poster_path} movieObj={movieObj} name={movieObj.title} rateing={movieObj.vote_average} handleaddtowatchlist={handleaddtowatchlist}/>
        </div>
        
      })}
     </div>
     <Page pageNo={pageNo} handlePrevious={handlePrevious} handleNext={handleNext}  />
    </div>
  )
}

export default Movie