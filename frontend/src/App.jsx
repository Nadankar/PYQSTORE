import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import CompBranch from './allBranch/CompBranch'
import MechBranch from "./allBranch/MechBranch"
import EcsBranch from './allBranch/EcsBranch'
import AidsBranch from "./allBranch/AidsBranch"
import Signup from './components/Signup'
import Contact from './components/Contact'



import Maths1_2023_pdf from './components/Maths1_2023_pdf'
import Maths1_2022_pdf from './components/Maths1_2022_pdf'
import Physics1_2023_pdf from './components/Physics1_2023_pdf'
import Physics1_2022_pdf from './components/Physics1_2022_pdf'
import Chemistry1_2022_pdf from './components/Chemistry1_2022_pdf'
import Chemistry1_2023_pdf from "./components/Chemistry1_2023_pdf"
import Mechanics_2023_pdf from './components/Mechanics_2023_pdf'
import BEE_2023_pdf from './components/BEE_2023_pdf'
import BEE_2022_pdf from './components/BEE_2022_pdf'
import Mechanics_2022_pdf from './components/Mechanics_2022_pdf'
import Maths2_2022_pdf from './components/Maths2_2022_pdf'
import Physics2_2022_pdf from './components/Physics2_2022_pdf'
import Chemistry2_2022_pdf from './components/Chemistry2_2022_pdf'
import EG_2022_pdf from './components/EG_2022_pdf'
import PCE1_2022_pdf from './components/PCE1_2022_pdf'
import C_programming_2022_pdf from './components/C_programming_2022_pdf'
import Maths2_2023_pdf from './components/Maths2_2023_pdf'
import Physics2_2023_pdf from './components/Physics2_2023_pdf'
import Chemistry2_2023_pdf from './components/Chemistry2_2023_pdf'
import PCE1_2023_pdf from './components/PCE1_2023_pdf'
import C_programming_2023_pdf from './components/C_programming_2023_pdf'
import Maths3_2022_pdf from './components/Maths3_2022_pdf'
import DBMS_2022_pdf from './components/DBMS_2022_pdf'
import DE_2022_pdf from './components/DE_2022_pdf'
import DSA_2022_pdf from './components/DSA_2022_pdf'
import ED_2022_pdf from './components/ED_2022_pdf'
import Maths3_2023_pdf from './components/Maths3_2023_pdf'
import DBMS_2023_pdf from './components/DBMS_2023_pdf'
import DE_2023_pdf from './components/DE_2023_pdf'
import DSA_2023_pdf from './components/DSA_2023_pdf'
import ED_2023_pdf from './components/ED_2023_pdf'
import Maths4_2022_pdf from './components/Maths4_2022_pdf'
import CAI_2022_pdf from './components/CAI_2022_pdf'
import DSAT_2022_pdf from './components/DSAT_2022_pdf'
import EC_2022_pdf from './components/EC_2022_pdf'
import MPMC_2022_pdf from './components/MPMC_2022_pdf'
import Maths4_2023_pdf from './components/Maths4_2023_pdf'
import CAI_2023_pdf from './components/CAI_2023_pdf'
import DSAT_2023_pdf from './components/DSAT_2023_pdf'
import EC_2023_pdf from './components/EC_2023_pdf'
import MPMC_2023_pdf from './components/MPMC_2023_pdf'
import AI_and_ML_2022_pdf from './components/AI_and_ML_2022_pdf'
import CE_2022_pdf from './components/CE_2022_pdf'
import CO_and_A_2022_pdf from './components/CO_and_A_2022_pdf'
import SE_2022_pdf from './components/SE_2022_pdf'
import ST_and_QA_2022_pdf from './components/ST_and_QA_2022_pdf'
import Web_technologies_2022_pdf_2022 from './components/Web_technologies_2022_pdf_2022'
import AI_and_ML_2023_pdf from './components/AI_and_ML_2023_pdf'
import CE_2023_pdf from './components/CE_2023_pdf'
import CO_and_A_2023_pdf from './components/CO_and_A_2023_pdf'
import SE_2023_pdf from './components/SE_2023_pdf'
import ST_and_QA_2023_pdf from './components/ST_and_QA_2023_pdf'
import Web_technologies_2023_pdf from './components/Web_technologies_2023_pdf'
import AI_2022_pdf from "./components/AI_2022_pdf"
import AI_2023_pdf from "./components/AI_2023_pdf"
import CN_2022_pdf from "./components/CN_2022_pdf"
import CN_2023_pdf from "./components/CN_2023_pdf"
import DW_and_M_2022_pdf from './components/DW_and_M_2022_pdf'
import DW_and_M_2023_pdf from './components/DW_and_M_2023_pdf'
import ES_and_RTOS_2022_pdf from './components/ES_and_RTOS_2022_pdf'
import DigitalForensic_2022_pdf from './components/DigitalForensic_2022_pdf'
import DigitalForensic_2023_pdf from './components/DigitalForensic_2023_pdf'
import ML_2023_pdf from './components/ML_2023_pdf'
import ML_2022_pdf from './components/ML_2022_pdf'
import BigdataAnalytics_2023_pdf from './components/BigdataAnalytics_2023_pdf'
import BigdataAnalytics_2022_pdf from './components/BigdataAnalytics_2022_pdf'
import CloudComputing_2023_pdf from './components/CloudComputing_2023_pdf'
import CloudComputing_2022_pdf from './components/CloudComputing_2022_pdf'
import CyberSecurity_2022_pdf from "./components/CyberSecurity_2022_pdf"
import CyberSecurity_2023_pdf from "./components/CyberSecurity_2023_pdf"
import DeepLearning_2023_pdf from './components/DeepLearning_2023_pdf'
import DeepLearning_2022_pdf from './components/DeepLearning_2022_pdf'
import DM_and_MM_2022_pdf from './components/DM_and_MM_2022_pdf'
import DM_and_MM_2023_pdf from './components/DM_and_MM_2023_pdf'
import InternetOfThings_2022_pdf from './components/InternetOfThings_2022_pdf'
import InternetOfThings_2023_pdf from './components/InternetOfThings_2023_pdf'
import VLSI_design_2022_pdf from './components/VLSI_design_2022_pdf'
import VLSI_design_2023_pdf from './components/VLSI_design_2023_pdf'
import Maths3_2022_aids_pdfs from './components/Maths3_2022_aids_pdfs'
import Maths3_2023_aids_pdfs from './components/Maths3_2023_aids_pdfs'
import DS_and_GT_2023_pdfs_aids from './components/DS_and_GT_2023_pdfs_aids'
import DS_and_GT_2022_pdfs_aids from './components/DS_and_GT_2022_pdfs_aids'
import DL_and_CA_2022_pdfs_aids from './components/DL_and_CA_2022_pdfs_aids'
import DL_and_CA_2023_pdfs_aids from './components/DL_and_CA_2023_pdfs_aids'
import DataStructure_2023_pdfs_aids from './components/DataStructure_2023_pdfs_aids'
import DataStructure_2022_pdfs_aids from './components/DataStructure_2022_pdfs_aids'
import AOA_2022_pdfs_aids from './components/AOA_2022_pdfs_aids'
import AOA_2023_pdfs_aids from './components/AOA_2023_pdfs_aids'
import DBMS_2023_pdfs_aids from './components/DBMS_2023_pdfs_aids'
import DBMS_2022_pdfs_aids from './components/DBMS_2022_pdfs_aids'
import Maths4_2023_aids_pdfs from './components/Math4_2023_aids_pdfs'
import Maths4_2022_aids_pdfs from './components/Math4_2022_aids_pdfs'
import MP_2022_pdfs_aids from './components/MP_2022_pdfs_aids'
import MP_2023_pdfs_aids from './components/MP_2023_pdfs_aids'
import OS_2023_pdfs_aids from './components/OS_2023_pdfs_aids'
import OS_2022_pdfs_aids from './components/OS_2022_pdfs_aids'
import AI_and_DS_2022_pdfs_aids from './components/AI_and_DS_2022_pdfs_aids'
import AI_and_DS_2023_pdfs_aids from './components/AI_and_DS_2023_pdfs_aids'
import CN_2023_pdfs_aids from './components/CN_2023_pdfs_aids'
import CN_2022_pdfs_aids from './components/CN_2022_pdfs_aids'
import DW_and_M_2022_pdfs_aids from './components/DW_and_M_2022_pdfs_aids'
import DW_and_M_2023_pdfs_aids from './components/DW_and_M_2023_pdfs_aids'
import EH_2023_pdfs_aids from './components/EH_2023_pdfs_aids'
import EH_2022_pdfs_aids from './components/EH_2022_pdfs_aids'
import Statis_2022_pdfs_aids from './components/Statis_2022_pdfs_aids'
import Statis_2023_pdfs_aids from './components/Statis_2023_pdfs_aids'
import WebComputing_2023_pdfs_aids from './components/WebComputing_2023_pdfs_aids'
import WebComputing_2022_pdfs_aids from './components/WebComputing_2022_pdfs_aids'
import DA_and_V_2023_pdfs_aids from './components/DA_and_V_2023_pdfs_aids'
import DA_and_V_2022_pdfs_aids from './components/DA_and_V_2022_pdfs_aids'
import DF_2022_pdfs_aids from './components/DF_2022_pdfs_aids'
import DF_2023_pdfs_aids from './components/DF_2023_pdfs_aids'
import IVP_2023_pdfs_aids from './components/IVP_2023_pdfs_aids'
import IVP_2022_pdfs_aids from './components/IVP_2022_pdfs_aids'
import ML_2022_pdfs_aids from './components/ML_2022_pdfs_aids'
import ML_2023_pdfs_aids from './components/ML_2023_pdfs_aids'
import SEPM_2022_pfds_aids from './components/SEPM_2022_pfds_aids'
import SEPM_2023_pfds_aids from './components/SEPM_2023_pfds_aids'
import CSS_2023_pdfs_aids from './components/CSS_2023_pdfs_aids'
import CSS_2022_pdfs_aids from './components/CSS_2022_pdfs_aids'
import BDA_2022_pdfs_aids from './components/BDA_2022_pdfs_aids'
import BDA_2023_pdfs_aids from './components/BDA_2023_pdfs_aids'
import BT_2023_pdfs_aids from './components/BT_2023_pdfs_aids'
import BT_2022_pdfs_aids from './components/BT_2022_pdfs_aids'
import DL_2022_pdfs_aids from './components/DL_2022_pdfs_aids'
import DL_2023_pdfs_aids from './components/DL_2023_pdfs_aids'
import DMMM_2023_pdfs_aids from './components/DMMM_2023_pdfs_aids'
import DMMM_2022_pdfs_aids from './components/DMMM_2022_pdfs_aids'
import GtForDs_2022_pdfs_aids from './components/GtForDs_2022_pdfs_aids'
import GtForDs_2023_pdfs_aids from './components/GtForDs_2023_pdfs_aids'
import NLP_2023_pdfs_aids from './components/NLP_2023_pdfs_aids'
import NLP_2022_pdfs_aids from './components/NLP_2022_pdfs_aids'
import Maths3_2023_pdfs_mech from './components/Maths3_2023_pdfs_mech'
import Maths3_2022_pdfs_mech from './components/Maths3_2022_pdfs_mech'
import SOM_2022_pdfs_mech from './components/SOM_2022_pdfs_mech'
import SOM_2023_pdfs_mech from './components/SOM_2023_pdfs_mech'
import PP_2023_pdfs_mech from './components/PP_2023_pdfs_mech'
import PP_2022_pdfs_mech from './components/PP_2022_pdfs_mech'
import MM_2022_pdfs_mech from './components/MM_2022_pdfs_mech'
import MM_2023_pdfs_mech from './components/MM_2023_pdfs_mech'
import Thermo_2023_pdfs_mech from './components/Thermo_2023_pdfs_mech'
import Thermo_2022_pdfs_mech from './components/Thermo_2022_pdfs_mech'
import Maths4_2022_pdfs_mech from './components/Maths4_2022_pdfs_mech'
import Maths4_2023_pdfs_mech from './components/Maths4_2023_pdfs_mech'
import FM_2023_pdfs_mech from './components/FM_2023_pdfs_mech'
import FM_2022_pdfs_mech from './components/FM_2022_pdfs_mech'
import KOM_2022_pdfs_mech from './components/KOM_2022_pdfs_mech'
import KOM_2023_pdfs_mech from './components/KOM_2023_pdfs_mech'
import CAD_2023_pdfs_mech from './components/CAD_2023_pdfs_mech'
import CAD_2022_pdfs_mech from './components/CAD_2022_pdfs_mech'
import IE_2022_pdfs_mech from './components/IE_2022_pdfs_mech'
import IE_2023_pdfs_mech from './components/IE_2023_pdfs_mech'
import MMC_2023_pdfs_mech from './components/MMC_2023_pdfs_mech'
import MMC_2022_pdfs_mech from './components/MMC_2022_pdfs_mech'
import TE_2022_pdfs_mech from './components/TE_2022_pdfs_mech'
import TE_2023_pdfs_mech from './components/TE_2023_pdfs_mech'
import DOM_2023_pdfs_mech from './components/DOM_2023_pdfs_mech'
import DOM_2022_pdfs_mech from './components/DOM_2022_pdfs_mech'
import ST_2022_pdfs_mech from './components/ST_2022_pdfs_mech'
import ST_2023_pdfs_mech from './components/ST_2023_pdfs_mech'
import VSD_2023_pdfs_mech from './components/VSD_2023_pdfs_mech'
import VSD_2022_pdfs_mech from './components/VSD_2022_pdfs_mech'
import FEA_2022_pdfs_mech from './components/FEA_2022_pdfs_mech'
import FEA_2023_pdfs_mech from './components/FEA_2023_pdfs_mech'
import HVAR_2023_pdfs_mech from './components/HVAR_2023_pdfs_mech'
import HVAR_2022_pdfs_mech from './components/HVAR_2022_pdfs_mech'
import AAI_2022_pdfs_mech from './components/AAI_2022_pdfs_mech'
import AAI_2023_pdfs_mech from './components/AAI_2023_pdfs_mech'
import MFT_2023_pdfs_mech from './components/MFT_2023_pdfs_mech'
import MFT_2022_pdfs_mech from './components/MFT_2022_pdfs_mech'
import EVDES_2022_pdfs_mech from './components/EVDES_2022_pdfs_mech'
import EVDES_2023_pdfs_mech from './components/EVDES_2023_pdfs_mech'
import MD_2023_pdfs_mech from './components/MD_2023_pdfs_mech'
import MD_2022_pdfs_mech from './components/MD_2022_pdfs_mech'
import TM_2023_pdfs_mech from './components/TM_2023_pdfs_mech'
import TM_2022_pdfs_mech from './components/TM_2022_pdfs_mech'
import DMS_2023_pdfs_mech from './components/DMS_2023_pdfs_mech'
import DMS_2022_pdfs_mech from './components/DMS_2022_pdfs_mech'
import LSCM_2022_pdfs_mech from './components/LSCM_2022_pdfs_mech'
import LSCM_2023_pdfs_mech from './components/LSCM_2023_pdfs_mech'
import VS_2023_pdfs_mech from './components/VS_2023_pdfs_mech'
import VS_2022_pdfs_mech from './components/VS_2022_pdfs_mech'
import APS_2022_pdfs_mech from './components/APS_2022_pdfs_mech'
import APS_2023_pdfs_mech from './components/APS_2023_pdfs_mech'
import RES_2023_pdfs_mech from './components/RES_2023_pdfs_mech'
import RES_2022_pdfs_mech from './components/RES_2022_pdfs_mech'
import SM_2022_pdfs_mech from './components/SM_2022_pdfs_mech'
import SM_2023_pdfs_mech from './components/SM_2023_pdfs_mech'
import PE_2023_pdfs_mech from './components/PE_2023_pdfs_mech'
import PE_2022_pdfs_mech from './components/PE_2022_pdfs_mech'
import PM_2022_pdfs_mech from './components/PM_2022_pdfs_mech'
import PM_2023_pdfs_mech from './components/PM_2023_pdfs_mech'
import EM_2023_pdfs_mech from './components/EM_2023_pdfs_mech'
import EM_2022_pdfs_mech from './components/EM_2022_pdfs_mech'
import DOMS_2022_pdfs_mech from './components/DOMS_2022_pdfs_mech'
import DOMS_2023_pdfs_mech from './components/DOMS_2023_pdfs_mech'
import OPC_2023_pdfs_mech from './components/OPC_2023_pdfs_mech'
import OPC_2022_pdfs_mech from './components/OPC_2022_pdfs_mech'
import CG_2022_pdfs_comp from './components/CG_2022_pdfs_comp'
import CG_2023_pdfs_comp from './components/CG_2023_pdfs_comp'
import DS_2023_pdfs_comp from './components/DS_2023_pdfs_comp'
import DS_2022_pdfs_comp from './components/DS_2022_pdfs_comp'
import DLCA_2022_pdfs_comp from './components/DLCA_2022_pdfs_comp'
import DLCA_2023_pdfs_comp from './components/DLCA_2023_pdfs_comp'
import DSGT_2023_pdfs_comp from './components/DSGT_2023_pdfs_comp'
import DSGT_2022_pdfs_comp from './components/DSGT_2022_pdfs_comp'
import Maths3_2022_pdfs_comp from './components/Maths3_2022_pdfs_comp'
import Maths3_2023_pdfs_comp from './components/Maths3_2023_pdfs_comp'
import BDA_2022_pdfs_comp from './components/BDA_2022_pdfs_comp'
import BDA_2023_pdfs_comp from './components/BDA_2023_pdfs_comp'
import Blockchain_2023_pdfs_comp from './components/Blockchain_2023_pdfs_comp'
import Blockchain_2022_pdfs_comp from './components/Blockchain_2022_pdfs_comp'
import CS_2023_pdfs_comp from './components/CS_2023_pdfs_comp'
import CS_2022_pdfs_comp from './components/CS_2022_pdfs_comp'
import DMMM_2022_pdfs_comp from './components/DMMM_2022_pdfs_comp'
import DMMM_2023_pdfs_comp from './components/DMMM_2023_pdfs_comp'
import IM_2022_pdfs_comp from './components/IM_2022_pdfs_comp'
import IM_2023_pdfs_comp from './components/IM_2023_pdfs_comp'
import ML_2022_pdfs_comp from './components/ML_2022_pdfs_comp'
import ML_2023_pdfs_comp from './components/ML_2023_pdfs_comp'
import NLP_2023_pdfs_comp from './components/NLP_2023_pdfs_comp'
import NLP_2022_pdfs_comp from './components/NLP_2022_pdfs_comp'
import Maths4_2023_pdfs_comp from './components/Maths4_2023_pdfs_comp'
import Maths4_2022_pdfs_comp from './components/Maths4_2022_pdfs_comp'
import DBMS_2022_pdfs_comp from './components/DBMS_2022_pdfs_comp'
import DBMS_2023_pdfs_comp from './components/DBMS_2023_pdfs_comp'
import AOA_2023_pdfs_comp from './components/AOA_2023_pdfs_comp'
import AOA_2022_pdfs_comp from './components/AOA_2022_pdfs_comp'
import MP_2022_pdfs_comp from './components/MP_2022_pdfs_comp'
import MP_2023_pdfs_comp from './components/MP_2023_pdfs_comp'
import OS_2023_pdfs_comp from './components/OS_2023_pdfs_comp'
import OS_2022_pdfs_comp from './components/OS_2022_pdfs_comp'







 
function App() {
  return (
   <>
   <div className="dark:bg-slate-900 dark:text-white">   
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/computer" element={<CompBranch/>}/>
    <Route path="/mechanical" element={<MechBranch/>}/>
    <Route path="/ecs" element={<EcsBranch/>}/>
    <Route path="/ai&ds" element={<AidsBranch/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
   



    {/*ecs pdf routes */}
    <Route path="/Maths1_2023_pdf" element={<Maths1_2023_pdf/>}/>
    <Route path="/Physics1_2023_pdf" element={<Physics1_2023_pdf/>}/>
    <Route path="/Physics1_2022_pdf" element={<Physics1_2022_pdf/>}/>
    <Route path="/Chemistry1_2023_pdf" element={<Chemistry1_2023_pdf/>}/>
    <Route path="/Chemistry1_2022_pdf" element={<Chemistry1_2022_pdf/>}/>
    <Route path="/Mechanics_2023_pdf" element={<Mechanics_2023_pdf/>}/>
    <Route path="/Mechanics_2022_pdf" element={<Mechanics_2022_pdf/>}/>
    <Route path="/BEE_2023_pdf" element={<BEE_2023_pdf/>}/>
    <Route path="/BEE_2022_pdf" element={<BEE_2022_pdf/>}/>
    <Route path="/Maths1_2022_pdf" element={<Maths1_2022_pdf/>}/>
    <Route path="/Maths2_2022_pdf" element={<Maths2_2022_pdf/>}/>
    <Route path="/Maths3_2022_pdf" element={<Maths3_2022_pdf/>}/>
    <Route path="/Physics2_2022_pdf" element={<Physics2_2022_pdf/>}/>
    <Route path="/Chemistry2_2022_pdf" element={<Chemistry2_2022_pdf/>}/>
    <Route path="/EG_2022_pdf" element={<EG_2022_pdf/>}/>
    <Route path="/PCE1_2022_pdf" element={<PCE1_2022_pdf/>}/>
    <Route path="/C_programming_2022_pdf" element={<C_programming_2022_pdf/>}/>
    <Route path="/Maths2_2023_pdf" element={<Maths2_2023_pdf/>}/>
    <Route path="/Physics2_2023_pdf" element={<Physics2_2023_pdf/>}/>
    <Route path="/Chemistry2_2023_pdf" element={<Chemistry2_2023_pdf/>}/>
    <Route path="/PCE1_2023_pdf" element={<PCE1_2023_pdf/>}/>
    <Route path="/C_programming_2023_pdf" element={<C_programming_2023_pdf/>}/>
    <Route path="/DBMS_2022_pdf" element={<DBMS_2022_pdf/>}/>
    <Route path="/DE_2022_pdf" element={<DE_2022_pdf/>}/>
    <Route path="/DSA_2022_pdf" element={<DSA_2022_pdf/>}/>
    <Route path="/ED_2022_pdf" element={<ED_2022_pdf/>}/>
    <Route path="/Maths3_2023_pdf" element={<Maths3_2023_pdf/>}/>
    <Route path="/DBMS_2023_pdf" element={<DBMS_2023_pdf/>}/>
    <Route path="/DE_2023_pdf" element={<DE_2023_pdf/>}/>
    <Route path="/DSA_2023_pdf" element={<DSA_2023_pdf/>}/>
    <Route path="/ED_2023_pdf" element={<ED_2023_pdf/>}/>
    <Route path="/Maths4_2022_pdf" element={<Maths4_2022_pdf/>}/>
    <Route path="/CAI_2022_pdf" element={<CAI_2022_pdf/>}/>
    <Route path="/DSAT_2022_pdf" element={<DSAT_2022_pdf/>}/>
    <Route path="/EC_2022_pdf" element={<EC_2022_pdf/>}/>
    <Route path="/MPMC_2022_pdf" element={<MPMC_2022_pdf/>}/>
    <Route path="/Maths4_2023_pdf" element={<Maths4_2023_pdf/>}/>
    <Route path="/CAI_2023_pdf" element={<CAI_2023_pdf/>}/>
    <Route path="/DSAT_2023_pdf" element={<DSAT_2023_pdf/>}/>
    <Route path="/EC_2023_pdf" element={<EC_2023_pdf/>}/>
    <Route path="/MPMC_2023_pdf" element={<MPMC_2023_pdf/>}/>
    <Route path="/AI_and_ML_2022_pdf" element={<AI_and_ML_2022_pdf/>}/>
    <Route path="/CE_2022_pdf" element={<CE_2022_pdf/>}/>
    <Route path="/CO_and_A_2022_pdf" element={<CO_and_A_2022_pdf/>}/>
    <Route path="/SE_2022_pdf" element={<SE_2022_pdf/>}/>
    <Route path="/ST_and_QA_2022_pdf" element={<ST_and_QA_2022_pdf/>}/>
    <Route path="/Web_technologies_2022_pdf" element={<Web_technologies_2022_pdf_2022/>}/>
    <Route path="/AI_and_ML_2023_pdf" element={<AI_and_ML_2023_pdf/>}/>
    <Route path="/CE_2023_pdf" element={<CE_2023_pdf/>}/>
    <Route path="/CO_and_A_2023_pdf" element={<CO_and_A_2023_pdf/>}/>
    <Route path="/SE_2023_pdf" element={<SE_2023_pdf/>}/>
    <Route path="/ST_and_QA_2023_pdf" element={<ST_and_QA_2023_pdf/>}/>
    <Route path="/Web_technologies_2023_pdf" element={<Web_technologies_2023_pdf/>}/>
    <Route path="/AI_2022_pdf" element={<AI_2022_pdf/>}/>
    <Route path="/AI_2023_pdf" element={<AI_2023_pdf/>}/>
    <Route path="/CN_2023_pdf" element={<CN_2023_pdf/>}/>
    <Route path="/CN_2022_pdf" element={<CN_2022_pdf/>}/>
    <Route path="/DW_and_M_2022_pdf" element={<DW_and_M_2022_pdf/>}/>
    <Route path="/DW_and_M_2023_pdf" element={<DW_and_M_2023_pdf/>}/>
    <Route path="/ES_and_RTOS_2022_pdf" element={<ES_and_RTOS_2022_pdf/>}/>
    <Route path="/DigitalForensic_2022_pdf" element={<DigitalForensic_2022_pdf/>}/>
    <Route path="/DigitalForensic_2023_pdf" element={<DigitalForensic_2023_pdf/>}/>
    <Route path="/ML_2023_pdf" element={<ML_2023_pdf/>}/>
    <Route path="/ML_2022_pdf" element={<ML_2022_pdf/>}/>
    <Route path="/BigdataAnalytics_2022_pdf" element={<BigdataAnalytics_2022_pdf/>}/>
    <Route path="/BigdataAnalytics_2023_pdf" element={<BigdataAnalytics_2023_pdf/>}/>
    <Route path="/CloudComputing_2023_pdf" element={<CloudComputing_2023_pdf/>}/>
    <Route path="/CloudComputing_2022_pdf" element={<CloudComputing_2022_pdf/>}/>
    <Route path="/CyberSecurity_2022_pdf" element={<CyberSecurity_2022_pdf/>}/>
    <Route path="/CyberSecurity_2023_pdf" element={<CyberSecurity_2023_pdf/>}/>
    <Route path="/DeepLearning_2022_pdf" element={<DeepLearning_2022_pdf/>}/>
    <Route path="/DeepLearning_2023_pdf" element={<DeepLearning_2023_pdf/>}/>
    <Route path="/DM_and_MM_2022_pdf" element={<DM_and_MM_2022_pdf/>}/>
    <Route path="/DM_and_MM_2023_pdf" element={<DM_and_MM_2023_pdf/>}/>
    <Route path="/InternetOfThings_2022_pdf" element={<InternetOfThings_2022_pdf/>}/>
    <Route path="/InternetOfThings_2023_pdf" element={<InternetOfThings_2023_pdf/>}/>
    <Route path="/VLSI_design_2023_pdf" element={<VLSI_design_2023_pdf/>}/>
    <Route path="/VLSI_design_2022_pdf" element={<VLSI_design_2022_pdf/>}/>

    {/*  aids pdf routes*/}
    <Route path="/Maths3_2022_aids_pdfs" element={<Maths3_2022_aids_pdfs/>}/>
    <Route path="/Maths3_2023_aids_pdfs" element={<Maths3_2023_aids_pdfs/>}/>
    <Route path="/DS_and_GT_2023_pdfs_aids" element={<DS_and_GT_2023_pdfs_aids/>}/>
    <Route path="/DS_and_GT_2022_pdfs_aids" element={<DS_and_GT_2022_pdfs_aids/>}/>
    <Route path="/DL_and_CA_2022_pdfs_aids" element={<DL_and_CA_2022_pdfs_aids/>}/>
    <Route path="/DL_and_CA_2023_pdfs_aids" element={<DL_and_CA_2023_pdfs_aids/>}/>
    <Route path="/DataStructure_2023_pdfs_aids" element={<DataStructure_2023_pdfs_aids/>}/>
    <Route path="/DataStructure_2022_pdfs_aids" element={<DataStructure_2022_pdfs_aids/>}/>
    <Route path="/AOA_2022_pdfs_aids" element={<AOA_2022_pdfs_aids/>}/>
    <Route path="/AOA_2023_pdfs_aids" element={<AOA_2023_pdfs_aids/>}/>
    <Route path="/DBMS_2023_pdfs_aids" element={<DBMS_2023_pdfs_aids/>}/>
    <Route path="/DBMS_2022_pdfs_aids" element={<DBMS_2022_pdfs_aids/>}/>
    <Route path="/Maths4_2022_aids_pdfs" element={<Maths4_2022_aids_pdfs/>}/>
    <Route path="/Maths4_2023_aids_pdfs" element={<Maths4_2023_aids_pdfs/>}/>  
    <Route path="/MP_2022_pdfs_aids" element={<MP_2022_pdfs_aids/>}/>
    <Route path="/MP_2023_pdfs_aids" element={<MP_2023_pdfs_aids/>}/>
    <Route path="/OS_2023_pdfs_aids" element={<OS_2023_pdfs_aids/>}/>
    <Route path="/OS_2022_pdfs_aids" element={<OS_2022_pdfs_aids/>}/>
    <Route path="/AI_and_DS_2022_pdfs_aids" element={<AI_and_DS_2022_pdfs_aids/>}/>
    <Route path="/AI_and_DS_2023_pdfs_aids" element={<AI_and_DS_2023_pdfs_aids/>}/>
    <Route path="/CN_2023_pdfs_aids" element={<CN_2023_pdfs_aids/>}/>
    <Route path="/CN_2022_pdfs_aids" element={<CN_2022_pdfs_aids/>}/>
    <Route path="/DW_and_M_2022_pdfs_aids" element={<DW_and_M_2022_pdfs_aids/>}/>
    <Route path="/DW_and_M_2023_pdfs_aids" element={<DW_and_M_2023_pdfs_aids/>}/>
    <Route path="/EH_2023_pdfs_aids" element={<EH_2023_pdfs_aids/>}/>
    <Route path="/EH_2022_pdfs_aids" element={<EH_2022_pdfs_aids/>}/>
    <Route path="/Statis_2022_pdfs_aids" element={<Statis_2022_pdfs_aids/>}/>
    <Route path="/Statis_2023_pdfs_aids" element={<Statis_2023_pdfs_aids/>}/>
    <Route path="/WebComputing_2023_pdfs_aids" element={<WebComputing_2023_pdfs_aids/>}/>
    <Route path="/WebComputing_2022_pdfs_aids" element={<WebComputing_2022_pdfs_aids/>}/>
    <Route path="/DA_and_V_2023_pdfs_aids" element={<DA_and_V_2023_pdfs_aids/>}/>
    <Route path="/DA_and_V_2022_pdfs_aids" element={<DA_and_V_2022_pdfs_aids/>}/>
    <Route path="/DF_2022_pdfs_aids" element={<DF_2022_pdfs_aids/>}/>
    <Route path="/DF_2023_pdfs_aids" element={<DF_2023_pdfs_aids/>}/>
    <Route path="/IVP_2023_pdfs_aids" element={<IVP_2023_pdfs_aids/>}/>
    <Route path="/IVP_2022_pdfs_aids" element={<IVP_2022_pdfs_aids/>}/>
    <Route path="/ML_2022_pdfs_aids" element={<ML_2022_pdfs_aids/>}/>
    <Route path="/ML_2023_pdfs_aids" element={<ML_2023_pdfs_aids/>}/>
    <Route path="/SEPM_2022_pfds_aids" element={<SEPM_2022_pfds_aids/>}/>
    <Route path="/SEPM_2023_pfds_aids" element={<SEPM_2023_pfds_aids/>}/>
    <Route path="/CSS_2023_pdfs_aids" element={<CSS_2023_pdfs_aids/>}/>
    <Route path="/CSS_2022_pdfs_aids" element={<CSS_2022_pdfs_aids/>}/>
    <Route path="/BDA_2022_pdfs_aids" element={<BDA_2022_pdfs_aids/>}/>
    <Route path="/BDA_2023_pdfs_aids" element={<BDA_2023_pdfs_aids/>}/>
    <Route path="/BT_2023_pdfs_aids" element={<BT_2023_pdfs_aids/>}/>
    <Route path="/BT_2022_pdfs_aids" element={<BT_2022_pdfs_aids/>}/>
    <Route path="/DL_2022_pdfs_aids" element={<DL_2022_pdfs_aids/>}/>
    <Route path="/DL_2023_pdfs_aids" element={<DL_2023_pdfs_aids/>}/>
    <Route path="/DMMM_2023_pdfs_aids" element={<DMMM_2023_pdfs_aids/>}/>
    <Route path="/DMMM_2022_pdfs_aids" element={<DMMM_2022_pdfs_aids/>}/>
    <Route path="/GtForDs_2022_pdfs_aids" element={<GtForDs_2022_pdfs_aids/>}/>
    <Route path="/GtForDs_2023_pdfs_aids" element={<GtForDs_2023_pdfs_aids/>}/>
    <Route path="/NLP_2023_pdfs_aids" element={<NLP_2023_pdfs_aids/>}/>
    <Route path="/NLP_2022_pdfs_aids" element={<NLP_2022_pdfs_aids/>}/>


      {/*comps routes */}

    <Route path="/Maths3_2023_pdfs_mech" element={<Maths3_2023_pdfs_mech/>}/>
    <Route path="/Maths3_2022_pdfs_mech" element={<Maths3_2022_pdfs_mech/>}/>
    <Route path="/SOM_2022_pdfs_mech" element={<SOM_2022_pdfs_mech/>}/>
    <Route path="/SOM_2023_pdfs_mech" element={<SOM_2023_pdfs_mech/>}/>
    <Route path="/PP_2023_pdfs_mech" element={<PP_2023_pdfs_mech/>}/>
    <Route path="/PP_2022_pdfs_mech" element={<PP_2022_pdfs_mech/>}/>
    <Route path="/MM_2022_pdfs_mech" element={<MM_2022_pdfs_mech/>}/>
    <Route path="/MM_2023_pdfs_mech" element={<MM_2023_pdfs_mech/>}/>
    <Route path="/Thermo_2023_pdfs_mech" element={<Thermo_2023_pdfs_mech/>}/>
    <Route path="/Thermo_2022_pdfs_mech" element={<Thermo_2022_pdfs_mech/>}/>
    <Route path="/Maths4_2022_pdfs_mech" element={<Maths4_2022_pdfs_mech/>}/>
    <Route path="/Maths4_2023_pdfs_mech" element={<Maths4_2023_pdfs_mech/>}/>
    <Route path="/FM_2023_pdfs_mech" element={<FM_2023_pdfs_mech/>}/>
    <Route path="/FM_2022_pdfs_mech" element={<FM_2022_pdfs_mech/>}/>
    <Route path="/KOM_2022_pdfs_mech" element={<KOM_2022_pdfs_mech/>}/>
    <Route path="/KOM_2023_pdfs_mech" element={<KOM_2023_pdfs_mech/>}/>
    <Route path="/CAD_2023_pdfs_mech" element={<CAD_2023_pdfs_mech/>}/>
    <Route path="/CAD_2022_pdfs_mech" element={<CAD_2022_pdfs_mech/>}/>
    <Route path="/IE_2022_pdfs_mech" element={<IE_2022_pdfs_mech/>}/>
    <Route path="/IE_2023_pdfs_mech" element={<IE_2023_pdfs_mech/>}/>
    <Route path="/MMC_2023_pdfs_mech" element={<MMC_2023_pdfs_mech/>}/>
    <Route path="/MMC_2022_pdfs_mech" element={<MMC_2022_pdfs_mech/>}/>
    <Route path="/TE_2022_pdfs_mech" element={<TE_2022_pdfs_mech/>}/>
    <Route path="/TE_2023_pdfs_mech" element={<TE_2023_pdfs_mech/>}/>
    <Route path="/DOM_2023_pdfs_mech" element={<DOM_2023_pdfs_mech/>}/>
    <Route path="/DOM_2022_pdfs_mech" element={<DOM_2022_pdfs_mech/>}/>
    <Route path="/ST_2022_pdfs_mech" element={<ST_2022_pdfs_mech/>}/>
    <Route path="/ST_2023_pdfs_mech" element={<ST_2023_pdfs_mech/>}/>
    <Route path="/VSD_2023_pdfs_mech" element={<VSD_2023_pdfs_mech/>}/>
    <Route path="/VSD_2022_pdfs_mech" element={<VSD_2022_pdfs_mech/>}/>
    <Route path="/FEA_2022_pdfs_mech" element={<FEA_2022_pdfs_mech/>}/>
    <Route path="/FEA_2023_pdfs_mech" element={<FEA_2023_pdfs_mech/>}/>
    <Route path="/HVAR_2023_pdfs_mech" element={<HVAR_2023_pdfs_mech/>}/>
    <Route path="/HVAR_2022_pdfs_mech" element={<HVAR_2022_pdfs_mech/>}/>
    <Route path="/AAI_2022_pdfs_mech" element={<AAI_2022_pdfs_mech/>}/>
    <Route path="/AAI_2023_pdfs_mech" element={<AAI_2023_pdfs_mech/>}/>
    <Route path="/MFT_2023_pdfs_mech" element={<MFT_2023_pdfs_mech/>}/>
    <Route path="/MFT_2022_pdfs_mech" element={<MFT_2022_pdfs_mech/>}/>
    <Route path="/EVDES_2022_pdfs_mech" element={<EVDES_2022_pdfs_mech/>}/>
    <Route path="/EVDES_2023_pdfs_mech" element={<EVDES_2023_pdfs_mech/>}/>
    <Route path="/MD_2023_pdfs_mech" element={<MD_2023_pdfs_mech/>}/>
    <Route path="/MD_2022_pdfs_mech" element={<MD_2022_pdfs_mech/>}/>
    <Route path="/TM_2022_pdfs_mech" element={<TM_2022_pdfs_mech/>}/>
    <Route path="/TM_2023_pdfs_mech" element={<TM_2023_pdfs_mech/>}/>
    <Route path="/DMS_2023_pdfs_mech" element={<DMS_2023_pdfs_mech/>}/>
    <Route path="/DMS_2022_pdfs_mech" element={<DMS_2022_pdfs_mech/>}/>
    <Route path="/LSCM_2022_pdfs_mech" element={<LSCM_2022_pdfs_mech/>}/>
    <Route path="/LSCM_2023_pdfs_mech" element={<LSCM_2023_pdfs_mech/>}/>
    <Route path="/VS_2023_pdfs_mech" element={<VS_2023_pdfs_mech/>}/>
    <Route path="/VS_2022_pdfs_mech" element={<VS_2022_pdfs_mech/>}/>
    <Route path="/APS_2022_pdfs_mech" element={<APS_2022_pdfs_mech/>}/>
    <Route path="/APS_2023_pdfs_mech" element={<APS_2023_pdfs_mech/>}/>
    <Route path="/RES_2023_pdfs_mech" element={<RES_2023_pdfs_mech/>}/>
    <Route path="/RES_2022_pdfs_mech" element={<RES_2022_pdfs_mech/>}/>
    <Route path="/SM_2022_pdfs_mech" element={<SM_2022_pdfs_mech/>}/>
    <Route path="/SM_2023_pdfs_mech" element={<SM_2023_pdfs_mech/>}/>
    <Route path="/PE_2023_pdfs_mech" element={<PE_2023_pdfs_mech/>}/>
    <Route path="/PE_2022_pdfs_mech" element={<PE_2022_pdfs_mech/>}/>
    <Route path="/PM_2022_pdfs_mech" element={<PM_2022_pdfs_mech/>}/>
    <Route path="/PM_2023_pdfs_mech" element={<PM_2023_pdfs_mech/>}/>
    <Route path="/EM_2023_pdfs_mech" element={<EM_2023_pdfs_mech/>}/>
    <Route path="/EM_2022_pdfs_mech" element={<EM_2022_pdfs_mech/>}/>
    <Route path="/DOMS_2022_pdfs_mech" element={<DOMS_2022_pdfs_mech/>}/>
    <Route path="/DOMS_2023_pdfs_mech" element={<DOMS_2023_pdfs_mech/>}/>
    <Route path="/OPC_2023_pdfs_mech" element={<OPC_2023_pdfs_mech/>}/>
    <Route path="/OPC_2022_pdfs_mech" element={<OPC_2022_pdfs_mech/>}/>

    {/*comps routes */}
    <Route path="/CG_2022_pdfs_comp" element={<CG_2022_pdfs_comp/>}/>
    <Route path="/CG_2023_pdfs_comp" element={<CG_2023_pdfs_comp/>}/>
    <Route path="/DS_2023_pdfs_comp" element={<DS_2023_pdfs_comp/>}/>
    <Route path="/DS_2022_pdfs_comp" element={<DS_2022_pdfs_comp/>}/>
    <Route path="/DLCA_2022_pdfs_comp" element={<DLCA_2022_pdfs_comp/>}/>
    <Route path="/DLCA_2023_pdfs_comp" element={<DLCA_2023_pdfs_comp/>}/>
    <Route path="/DSGT_2023_pdfs_comp" element={<DSGT_2023_pdfs_comp/>}/>
    <Route path="/DSGT_2022_pdfs_comp" element={<DSGT_2022_pdfs_comp/>}/>
    <Route path="/Maths3_2022_pdfs_comp" element={<Maths3_2022_pdfs_comp/>}/>
    <Route path="/Maths3_2023_pdfs_comp" element={<Maths3_2023_pdfs_comp/>}/>
    <Route path="/BDA_2022_pdfs_comp" element={<BDA_2022_pdfs_comp/>}/>
    <Route path="/BDA_2023_pdfs_comp" element={<BDA_2023_pdfs_comp/>}/>
    <Route path="/Blockchain_2023_pdfs_comp" element={<Blockchain_2023_pdfs_comp/>}/>
    <Route path="/Blockchain_2022_pdfs_comp" element={<Blockchain_2022_pdfs_comp/>}/>
    <Route path="/CS_2023_pdfs_comp" element={<CS_2023_pdfs_comp/>}/>
    <Route path="/CS_2022_pdfs_comp" element={<CS_2022_pdfs_comp/>}/>
    <Route path="/DMMM_2022_pdfs_comp" element={<DMMM_2022_pdfs_comp/>}/>
    <Route path="/DMMM_2023_pdfs_comp" element={<DMMM_2023_pdfs_comp/>}/>
    <Route path="/IM_2022_pdfs_comp" element={<IM_2022_pdfs_comp/>}/>
    <Route path="/IM_2023_pdfs_comp" element={<IM_2023_pdfs_comp/>}/>
    <Route path="/ML_2022_pdfs_comp" element={<ML_2022_pdfs_comp/>}/>
    <Route path="/ML_2023_pdfs_comp" element={<ML_2023_pdfs_comp/>}/>
    <Route path="/NLP_2023_pdfs_comp" element={<NLP_2023_pdfs_comp/>}/>
    <Route path="/NLP_2022_pdfs_comp" element={<NLP_2022_pdfs_comp/>}/>
    <Route path="/Maths4_2023_pdfs_comp" element={<Maths4_2023_pdfs_comp/>}/>
    <Route path="/Maths4_2022_pdfs_comp" element={<Maths4_2022_pdfs_comp/>}/>
    <Route path="/DBMS_2022_pdfs_comp" element={<DBMS_2022_pdfs_comp/>}/>
    <Route path="/DBMS_2023_pdfs_comp" element={<DBMS_2023_pdfs_comp/>}/>
    <Route path="/AOA_2023_pdfs_comp" element={<AOA_2023_pdfs_comp/>}/>
    <Route path="/AOA_2022_pdfs_comp" element={<AOA_2022_pdfs_comp/>}/>
    <Route path="/MP_2022_pdfs_comp" element={<MP_2022_pdfs_comp/>}/>
    <Route path="/MP_2023_pdfs_comp" element={<MP_2023_pdfs_comp/>}/>
    <Route path="/OS_2023_pdfs_comp" element={<OS_2023_pdfs_comp/>}/>
    <Route path="/OS_2022_pdfs_comp" element={<OS_2022_pdfs_comp/>}/>





  


    
    

    </Routes>
  </div>
  
   </>
  )
} 

export default App

