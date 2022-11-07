
import React from 'react'




const PrjTwo = () => {
   
    
    return ( 
   
        <div className="flex flex-col items-center bg-gray-600">
            <div className=" h-screen w-full flex justify-center pt-16 max-w-4xl">
                <div className="h-3/5 sm:h-2/5 w-6/12 bg-gray-100 border-4 border-gray-300 rounded-3xl shadow-2xl  flex flex-col items-center overflow-hidden">
                    <div className="w-full rounded-t-3xl bg-gray-200 flex px-4 text-2xl text-gray-500 items-center py-8">The title of the card here</div>
                    <div className="py-8 w-full px-4 flex flex-col sm:flex-row items-center justify-between">
                        <button className="bg-orange-600 rounded-full text-gray-200 uppercase font-bold px-4 py-1">under review </button>
                        <date className="font-bold">May 14, 1988</date>
                    </div>
                    <div className="py-4  border-t-2 border-gray-200 w-full flex  items-center ">
                        <div className="py-4 w-full mt-3 mx-4 bg-gray-100 bg-gray-200 rounded-2xl flex text-2xl justify-center items-center font-bold px-8 text-gray-600 text-opacity-80">Here is a short comment about this employee.</div>
                    </div>
                    <div className="rounded-xl bg-gray-200 w-full flex flex-col p-4">
                        <div className="uppercase font-bold text-gray-500 px-4">Employee</div>    
                        <div className="flex  w-full mt-4 px-4">
                            <button className="rounded-full h-16 w-16 bg-blue-800 text-blue-200 text-2xl">VG</button>
                            <div className="ml-4 flex flex-col justify-between">
                                    <div className="font-bold text-xl">Victor Gonzalez</div>
                                    <p className="text-xl font-bold text-gray-500">Instructor</p>
                            </div>

                        </div>
                    
                        
                    </div>   
             </div>
            </div> 
        </div>
    

    )
}
 
export default PrjTwo
