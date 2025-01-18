import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aids from "../components/Aids"
import Tableaids from '../components/Tableaids'

function AidsBranch() {
  return (
    <>
    <Navbar/>
     <div className="min-h-min dark:bg-slate-900 dark:text-white">
        <Aids/>
     </div>
     <Tableaids/>
     <Footer/>
    </>
  )
}

export default AidsBranch
