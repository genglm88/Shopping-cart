
import React from 'react'
import logo from "/tailwind-logo.png"


const PrjThree = () => {
    
   const cardContent = [
        {   header: "No Custom CSS",
            main: "Tailwind's advanced class extraction will leave your project free of custom CSS."
        },
        {   header: "Developer Experience",
            main: "Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing."
        },
        {   header: "Mobile Friendly",
            main: "Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy."
        } 

   ]

    const DisSvg = ({cardNum}) => {
        const addedClass="h-12 w-12 fill-current"
       
        switch(cardNum) {
            case 0: 
                return (
                    <svg class={addedClass}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                )           
            case 1: 
                return (
                    <svg class={addedClass}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z"/></svg>
                )                
            case 2: 
                return (
                    <svg class={addedClass}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z"/></svg>
                )      
            default:
                return (
                    <h1>Not a correct choice</h1>
                )                    
         }
        }
            
    const Card = ({cardNum, header, main}) => {
        return ( 
     
            <div className="sm:w-1/3 mt-4">
               <div className="h-full bg-gray-100 flex justify-center items-center flex-col pb-6 border-b-4 border-pink-400 rounded-md px-8 py-8 sm:mx-2">
                   <div className="bg-indigo-100 w-16 h-16 rounded-full flex justify-center items-center p-2 mb-2">
                        <DisSvg cardNum={cardNum}  />
                   </div>
                   <div className="font-bold text-gray-800 text-base">{header}</div>
                   <div >{main}</div>
               </div>
           </div>
        )
    }

    return ( 
        <>
            <body className=" bg-indigo-100 font-sans flex flex-col items-center  justify-center"></body>
           
                <header className="bg-indigo-700 w-screen flex justify-center items-center  border-b-4 border-pink-400 px-6">
                    <div class="relative max-w-4xl w-full py-4 mx-4">
                        <div className="flex text-pink-500 justify-between items-center pr-4">
                            <svg className="fill-current h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 32"><path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z"/></svg>
                            
                            <button type="button" className="h-8 text-indigo-300 sm:hidden hover:text-indigo-500 cursor-pointer">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                            </button>

                        </div>
                                
                        <h2 className="text-xl captalize text-indigo-100 mt-4">Want to learn Tailwind CSS?</h2>
                        <p className="text-indigo-300 leadind-loose text-xs mt-1 mb-3">Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step.</p>

                        <a href="#" className=" text-left text-indigo-100 bg-pink-400 px-4 py-1 w-32  mt-4 rounded-2xl uppercase text-xs font-bold hover:text-indigo-300 cursor-pointer">Enroll now</a>

                        <div class="w-24 h-24 border-4 border-pink-400 rounded-full bg-indigo-100 flex justify-center items-center absolute right-4 -bottom-12">
                        <img class="w-16 h-16" src={logo} alt="logo" />
                        </div>
                    </div>                
                </header>
    
                <main className="bg-indigo-100 w-screen flex flex-col justify-center items-center">
                    <div className="max-w-4xl pl-6 pr-8">
                        <div className="text-indigo-800 font-bold pt-12 border-b-2 border-indigo-200">How It Works</div>
                        <div>
                            <p className="text-xs text-gray-400 py-4 leading-relaxed ">Tailwind is designed for rapid development of modern applications. At its core, it is a robust mobile-first design system built with developer experience in mind. After using Tailwind CSS, you will find it difficult to go back to use anything else. Learn all about it in this all-inclusive course.</p>
                            
                            <div className="text-indigo-800 font-bold pt-4 border-b-2 border-indigo-200 ">Advantages</div>
                        </div>

                        <div className="flex flex-col sm:flex-row text-xs text-gray-400 leading-relaxed text-center sm:-mx-2 mb-4">
                            {cardContent.map((card, index)=>{
                                return (
                                    <Card 
                                            key={"index"+{index}} 
                                            cardNum={index} 
                                            header={card.header} 
                                            main={card.main}
                                        />

                            )} )}
                            
                        </div>                      
                     </div>

                     <div className="bg-gray-700 text-gray-400 flex flex-col justify-center items-center w-full border-t-4 border-black ">                 
                                    <h2 className="font-bold text-indigo-100 my-6 select-none">Sign up to download the free PDF</h2>
                                    <form className="max-w-xl flex flex-col w-full px-2 pr-4" action="#" method="post">
                                        <div className="flex flex-col md:flex-row mx-4 md:-mx-2">
                                            <label for="first_name" className="sr-only">First Name</label>
                                            <input id="first_name" type="text" placeholder="First name" className="w-full rounded-lg px-4 py-1 bg-gray-600 border-gray-500  border-2 text-indigo-100 mb-4 text-sm md:mx-2 "/>

                                            <label for="last_name" className="sr-only">Last name</label>
                                            <input id="last_name" type="text" placeholder = "Last name" className="w-full rounded-lg px-4 py-1 bg-gray-600 border-gray-500  border-2 text-indigo-100 mb-4 text-sm md:mx-2"  />
                                        </div>
                                       
                                        <div className="flex flex-col md:flex-row mx-4 md:-mx-2">
                                            <label for="email" className="sr-only">Email</label>
                                            <input id="email" type="email" placeholder="john@email.com"  className="w-full rounded-lg px-4 py-1 bg-gray-600 border-gray-500  border-2 text-indigo-100 mb-4 text-sm md:mx-2" />

                                            <label for="your_title" className="sr-only">Your Title</label>
                                            <input id="your_title" type="text" placeholder="Your title" className="w-full rounded-lg px-4 py-1 bg-gray-600 border-gray-500  border-2 text-indigo-100 mb-4 text-sm md:mx-2"  />
                                        </div>

                                        <div className="flex flex-col md:flex-row mx-4 md:-mx-0">    
                                                <button type="submit" className="flex flex-col w-full  text-indigo-100 bg-indigo-500 rounded-md py-1  text-sm mb-16 ">Create account</button> 
                                         </div>
                                    </form>
                                </div>   
               </main>
                    
                <footer className="pb-8 flex flex-col  w-screen tems-center justify-center bg-gray-700 text-gray-400 text-xs border-t-2 border-gray-500 text-center">   
                    
                      <p>Copyright © 2019 Scrimba</p>
                 

                </footer>
            
        </>      
    )
}
 
export default PrjThree;
