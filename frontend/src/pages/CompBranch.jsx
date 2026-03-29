import React from 'react'
import Navbar from '../components/homePageComponents/Navbar'
import Footer from '../components/homePageComponents/Footer'
import TableComps from '../components/Tables/TableComps'
import BranchHeader from '../components/Tables/BranchHeader'

function CompBranch() {
  return (
    <> 
     <Navbar/>
     <BranchHeader branchName={"computer"} />
     <TableComps/>    
     <Footer/> 
    </>
  )
}

export default CompBranch

