import React, {useState} from "react"
import MovieCard from "./MovieCard"

const SearchMovies = () => {

    const [query, setQuery] = useState("Inception")
    const [movies, setMovies] = useState([])


    const searchMovies = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=3219042dcb226c390d6d37390d6452ff&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }   catch(err) {
            console.error(err)
        }
    }

    const handleChange = (event) => {
        console.log(event.target)
        setQuery(event.target.value)
    }

    return (  
        <>
            <form className="form" onSubmit = {searchMovies}>
                <label 
                    className="label"
                    htmlFor = "query">Movie Name</label>
                
                <input
                    className="input"
                    type='text'
                    placeholder="inception"
                    name="query" 
                    value={query}
                    onChange={handleChange}
                />
                
                <button
                    className="button"
                    type="submit" > Search </button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie = {movie} key={movie.id}/>
                )  )}  
            </div>
          
        </>
 
    )
}
 
export default SearchMovies
