
import React from 'react'
import Navbar from '../components/homePageComponents/Navbar'
import Footer from '../components/homePageComponents/Footer'
import TableAids from '../components/Tables/TableAids'
import BranchHeader from '../components/Tables/BranchHeader'

function AidsBranch() { 
  return (
    <> 
      <Navbar /> 
      <BranchHeader branchName={"AI & DS"}/>
      <TableAids />
      <Footer />
    </> 
  ) 
}

export default AidsBranch 