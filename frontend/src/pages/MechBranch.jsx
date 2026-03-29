import React from 'react'
import Navbar from '../components/homePageComponents/Navbar'
import Footer from '../components/homePageComponents/Footer' 
import TableMech from '../components/Tables/TableMech'
import BranchHeader from '../components/Tables/BranchHeader'

function MechBranch() {
  return (
    <>
     <Navbar/>
       <BranchHeader branchName={"Mechanical"}/>
     <TableMech/>
     <Footer/>
    </>
  )
}

export default MechBranch
