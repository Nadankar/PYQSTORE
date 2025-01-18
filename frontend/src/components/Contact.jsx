import React from 'react'
import Navbar from './Navbar'

 
function Contact() {  
  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  grid justify-center '>
            <div className="`  dark:text-white dark:bg-slate-900 text-black bg-white mt-40 ">
                    <h3 className="font-bold text-lg mb-5 ">Contact Us </h3>
                    <div>
                    <label>
                            <span>Name</span><br />
                            <input type="name" placeholder="Enter your name" className="w-100 outline-none dark:text-white dark:bg-slate-900" />
                        </label><br /><br />
                        <label>
                            <span>Email</span><br />
                            <input type="email" placeholder="Enter your email" className="w-100 outline-none dark:text-white dark:bg-slate-900" />
                        </label><br /><br />
                        <label>
                            <span>Message</span><br />
                             <textarea type="text" placeholder="Type your Message" className="w-100 outline-none dark:text-white dark:bg-slate-900"></textarea>
                        </label><br /><br />
                        <button onClick={()=>alert("Contact functionality is not available right now")} className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700 duration-200 ease-in-out">
                            Submit
                        </button>   

                        <br /><br /><br /><br /><br /><br />
                    </div>
                
                </div>
        </div>
        </>
  )
}

export default Contact 
