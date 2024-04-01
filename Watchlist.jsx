import React from 'react'

function Watchlist({watchlist,deleteMovie}) {
  return (
    <div>
     <div className="txt">
      <h1 style={{textAlign:"center"}}>Watchlist</h1>
     </div>
     
      <table border={1}>
        <thead>
         <tr>
          <th>Poster</th>
          <th>Name</th>
          <th>Based on</th>
          <th>Relese Date</th>
          <th>Rateing</th>
         </tr>
        </thead>
        <tbody>
          {watchlist.map((movieObj)=>{
            return           <tr>
            <img src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} style={{height:"100px",width:"100px",margin:"10px",border:"2px solid white",borderRadius:"1rem"}} alt="" />
        <td>{movieObj.title}</td>
        <td>{movieObj.overview}</td>
        <td>{movieObj.release_date}</td>
        <td>{movieObj.vote_average}</td>

       
            </tr>
          })}

     
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist