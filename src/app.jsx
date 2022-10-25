import React from 'react'
import ReactDOM from "react-dom"
import SearchMovies from './components/SearchMovies'
import "./css/styles.css"

const  App = ()=>  {
  
        return (
            <div className="container">
                <h1 className="title">Movie Search </h1>
                <SearchMovies/>
            </div>
           
        )
   
}

export default App