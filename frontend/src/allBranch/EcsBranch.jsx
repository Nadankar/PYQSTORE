import React from 'react'
import Ecs from '../components/Ecs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Table_ecs from '../components/Table_ecs'

function EcsBranch() {
  return (
    <>
    <Navbar/>
    <div className="min-h-min">
      <Ecs/>
    </div>
    <Table_ecs/>
    <Footer/>
   </>
  )
}

export default EcsBranch
