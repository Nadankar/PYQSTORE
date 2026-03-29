
import React from 'react' 
import Navbar from '../components/homePageComponents/Navbar'
import Footer from '../components/homePageComponents/Footer'
import BranchHeader from '../components/Tables/BranchHeader'
import TableEcs from '../components/Tables/TableEcs'

function EcsBranch() {
  return (
    <>
    <Navbar/>
    <BranchHeader branchName={"ECS"}/>
    <TableEcs/>
    <Footer/>
   </>  
  )
} 
 
export default EcsBranch