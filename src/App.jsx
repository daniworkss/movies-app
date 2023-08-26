import './index.css'
import searchIcon from './assets/SearchIcon.svg'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'



function App (){
  const [movies, setMovies]= useState([])
   const[searchValue, setsearchValue] = useState('')


  const fetchMovies = async(movieTitle)=>{
    const res = await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=a032dcc3&s=${movieTitle}`)
    const resData = await res.json()
   setMovies(resData.Search)
   
 }
useEffect(()=>{
  fetchMovies()
},[])

function searchClicked(){
  fetchMovies(searchValue)
  setsearchValue('')
}

 return(
  <div className="app pt-6">
    <h1 className='text-white text-center text-3xl font-bold' onClick={()=>fetchMovies()}>DANI <span className='text-red-700'>MOVIES</span></h1>
    <div className="search-wrapper flex justify-center">
        <div className="search-container  mt-6 flex justify-center bg-white">
          <input type="text"  placeholder='Search Movies'
            onChange={e => setsearchValue(e.target.value)}
            value={searchValue}
          />
          <img src={searchIcon} alt="search icon"  
           className='search-icon cursor-pointer'
           onClick={searchClicked}
          />
        </div>
    </div>

    {
      movies?.length >0
      ?(
        <div className="movie-wrapper flex justify-center mt-8 flex-wrap gap-8" >
        {movies.map( (movies, id) =>(
          <div key={id}>
              <MovieCard movies = {movies}/>
          </div>
         
        ))}
    </div>
      ):(
        <div className='no-movies mt-40 flex justify-center'>
          <h2 className='text-white font-semibold text-2xl'>No Movies Found</h2>
        </div>
      )
    }
  </div>
 )
}
export default App