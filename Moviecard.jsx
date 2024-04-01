import React from 'react'

function Moviecard({poster_path,name,rateing,handleaddtowatchlist,movieObj}) {
  function doesExist(){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id==movieObj.id){
        return true
      }
    }
    return false
  }
  return (
    <div>
       <div className="card" style={{width: "12rem",height:"460px",margin:"20px"}}>
  <div className="photo" style={{height:"350px",width:"11.7rem",backgroundImage:`url(https://image.tmdb.org/t/p/w500${poster_path})`,backgroundSize:"cover"}}></div>
  <div className="card-body">
    
  <div className="add" style={{cursor:"pointer"}} onClick={()=>(handleaddtowatchlist(movieObj))}>	&#128508;</div>
    <p className="card-text">{name}</p>
    <p className="rateing">IMDB : {rateing}</p>
  </div>
</div>
    </div>
  )
}

export default Moviecard
