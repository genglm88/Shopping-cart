import React from "react"
import {Link} from 'react-router-dom'


const Header= () => {
    return ( 
        <div className="flex flex-col items-center">
            <div>
              <Link to="/" className="w-screen flex bg-indigo-100 text-4xl md:text-6xl text-indigo-800 px-24 py-8 items-center justify-center">My Projects</Link>
            </div>
            <div className="bg-gray-100 w-screen flex  justify-center items-center ">
                <nav className="flex flex-wrap justify-between w-full px-6 pr-8 py-8 text-xl font-bold text-indigo-600 max-w-4xl">  
                    <Link to="/projone" className="hover:text-red-900 cursor-pointer">Project1</Link>
            
                    <Link to="/projtwo" className="hover:text-red-900 cursor-pointer">Project2</Link>
                
                    <Link to="/projthree" className="hover:text-red-900 cursor-pointer capitalize">project3</Link>
                
                </nav>
            </div>       
           
        </div>
    )
}
 
export default Header