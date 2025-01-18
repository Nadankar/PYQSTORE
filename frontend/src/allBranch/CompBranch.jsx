import React from 'react'
import Computer from '../components/Computer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tablecomps from '../components/Tablecomps'

function CompBranch() {
  return (
    <>
     <Navbar/>
     <div className="min-h-min mt-50 mb-10">
       <Computer/>
     </div>
     <Tablecomps/>    
     <Footer/>
    </>
  )
}

export default CompBranch

