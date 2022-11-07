
import React from 'react'




const PrjOne = () => {
   
    
    return ( 
     
            <div className="bg-gray-100 h-screen flex justify-center pt-16  w-full">
                <div className="h-2/4 w-3/4 w-fullbg-gray-200 border-4 border-gray-300 rounded-3xl shadow-2xl  flex flex-col items-center pt-16 max-w-4xl">
                    
                        <label for="full name" className="text-gray-600 text-4xl capitalize font-bold mb-4 select-none">Full Name</label>
                        <input id="full_name" placeholder ="Enter your full name" 
                        className="text-indigo-300 text-2xl w-3/6 font-bold border-gray-400 border-4 mb-4 rounded-2xl shadow px-4 py-4 opacity-60 
                        placeholder-indigo-300 focus:bg-blue-100"/>
                      
          
                        <button className="bg-gray-900 text-indigo-300 text-4xl font-bold border-gray-400 border-4 mb-4 rounded-2xl shadow-lg px-8 py-8 ">Save</button>
                       
             </div>
           </div> 
       

    )
}
 
export default PrjOne;
