import './index.css'
const MovieCard = ({movies})=>{
return(
<div className="movie">
        <img src={movies.Poster !== 'N/A' ? movies.Poster : 'https://placehold.co/400'} alt="movie Poster" />
        <p className="movie-type uppercase mt-2 ml-2 text-sm">{movies.Type}</p>
        <h1 className='uppercase text-3xl font-bold text-center text-red-700'>{movies.Title}</h1>
        <p className="movie-year text-center mt-2 pb-6">{movies.Year}</p>
</div>
)
}
export default MovieCard