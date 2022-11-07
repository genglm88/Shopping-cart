
import React from "react"
import ReactDOM from "react-dom"

import {Routes, Route, Link} from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import PrjOne from './components/PrjOne'
import PrjTwo from "./components/PrjTwo"
import Prjthree from "./components/PrjThree"

import NoPage from "./components/NoPage"

import "./index.css"


const  App = ()=> {
    return (  
      <div>
          <Header />

          <Routes>
                <Route path="/" element={<Home/>} />
  
                <Route  path="projone" element={<PrjOne />}  />

                <Route  path="projtwo" element={<PrjTwo />}  />

                <Route  path="projthree" element={<Prjthree />}  />

                <Route path="*" element ={<NoPage/>} />
    
            </Routes>  



      </div>   
 
       
       )
}  

export default App