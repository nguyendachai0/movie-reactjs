import {useEffect, useState} from 'react'

import MovieCard from './MovieCard'
import './App.css'

import searchIcon from './search.svg'

// const movie = 
//     {
//         "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
//         "Year": "2007",
//         "imdbID": "tt1132238",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
//     }

const API_URL = 'http://www.omdbapi.com?apikey=569946a3'
const App = () => {

    const  [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    },[]);
    return (
        
      <div className="app">
    
        <h1>MovieLand</h1>

        <div className="search">
            <input 
            placeholder="Search for movies" value={searchTerm} 
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}/>
            <img src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}/>
        </div>
        {
        movies?.length > 0 ? 
            (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ) ) }
                    </div>) : (
                        <div className="empty">
                            <h2>NO movies found</h2>
                            </div>
                    )
            
                    }
      
      </div>
      
    )
}
export default App;