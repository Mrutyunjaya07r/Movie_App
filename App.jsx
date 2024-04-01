
import { useEffect, useState } from 'react'
import Aboutus from './Aboutus'
import './App.css'
import Movie from './Movie'
import Moviecard from './Moviecard'
import Watchlist from './Watchlist'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

let [watchlist,setWatchlist]=useState([]);
let handleaddtowatchlist=(movieObj)=>{
    let newWatchlist=[...watchlist,movieObj];
    localStorage.setItem('moviesApp',JSON.stringify( newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist);
}
useEffect(()=>{
  let moviefromlocalstorage=localStorage.getItem('moviesApp')
  if(!moviefromlocalstorage){
    return '';
  }
  setWatchlist(JSON.parse(moviefromlocalstorage));
},[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Movie handleaddtowatchlist={handleaddtowatchlist}/>} />
      <Route path='/Watchlist' element={<Watchlist watchlist={watchlist}/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>


      </Routes>
    </BrowserRouter>
     
     
    </>
  )
}

export default App
