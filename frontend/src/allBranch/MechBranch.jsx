import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mechanical from '../components/Mechanical'
import Tablemech from '../components/Tablemech'

function MechBranch() {
  return (
    <>
     <Navbar/>
     <div className="min-h-min">
       <Mechanical/>
     </div>
     <Tablemech/>
     <Footer/>
    </>
  )
}

export default MechBranch
