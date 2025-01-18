import React from 'react'
import {Link} from "react-router-dom"

function Ecs() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
      <div className=" text-center justify-items-center">
         <h1 className="text-2xl font-bold md:text-4xl">We are delighted to have you 
           <span className="text-pink-600"> here!</span>
         </h1>
         <p className="mt-10">
         "Explore our collection of previous year question papers for <span className="text-blue-600">ECS Engineering</span> from 2022 and 2023. Equip yourself with essential resources to excel in your exams and gain a deeper understanding of your coursework."
         </p>
         <Link to="/">
         <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ease-in-out mt-5">
          Back
         </button>
         </Link>
          </div> 
    </div>
    </>
  )
}

export default Ecs
