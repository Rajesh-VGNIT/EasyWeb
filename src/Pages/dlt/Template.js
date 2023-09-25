import React, { useState } from 'react'
import './Template.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios';
import Dlt from './Dlt'

const Template = () => {

// pop-up code
const [modal, setModal] = useState(false)
//update/create data
const [templateName, setTemplateName] = useState('')
const [templateId, setTemplateId] = useState('')


const handleSubmit = (e) => {
 e.preventDefault();
 axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
     e_templateName:templateName,
     e_templateId:templateId,
    
    
 });
 }

  return (
    <div>
      <Dlt />
      <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
         Add Template
       <p style={{color:"#aaa",fontSize:"14px"}}>Add a Template by filling the details below</p>
       </ModalHeader>
         <ModalBody style={{height:"700px"}}>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Template Name'>
                   Template Name<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setTemplateName(e.target.value)} type="text" placeholder='Enter Template Name' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Template Name'>
                   Template ID<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setTemplateId(e.target.value)} type="text" placeholder='Enter Template ID' />
                 </div>
               </Col>

              

               <Col lg={12}>
                 <div>
                   <label htmlFor='Select Type'>
                   Select Type<span style={{color:"#dc3545"}}>*</span>
                   </label><br/>
                   <select style={{width:"29rem",height:"40px",border:"1.5px solid #aaa",borderRadius:"3px",background:"#e4ecf5",outline:"none"}}>
                   <option></option>
                    <option>Promo</option>
                    <option>Service Implicit</option>
                    <option>Service Explicit</option>
                   </select>
                 </div>
               </Col>
  
               <Col lg={12}>
                 <div>
                   <label htmlFor='Select Entity ID'>
                   Select Entity ID<span style={{color:"#dc3545"}}>*</span>
                   </label><br/>
                   <select style={{width:"29rem",height:"40px",border:"1.5px solid #aaa",borderRadius:"3px",background:"#e4ecf5",outline:"none"}}>
                   <option></option>
                    
                   </select>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Select Entity ID'>
                   Select Sender ID<span style={{color:"#dc3545"}}>*</span>
                   </label><br/>
                   <select style={{width:"29rem",height:"40px",border:"1.5px solid #aaa",borderRadius:"3px",background:"#e4ecf5",outline:"none"}}>
                   <option></option>
                   </select>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Description'>
                   Description
                   </label>
                   <textarea className="form-control" onChange = {(e) => setTemplateName(e.target.value)} type="text" placeholder='Enter Template Name'></textarea>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Description'>
                   Content<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <textarea className="form-control" onChange = {(e) => setTemplateName(e.target.value)} type="text" placeholder='Enter Template Name'></textarea>
                 </div>
               </Col>
              
               
             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
            Add
          </button>
          <button className='btn mt-3' type='submit' style={{ backgroundColor: "#fff",color:"#aaa", float:"right",marginRight:"20px" }} >
            cancel
          </button>
         </ModalBody>
    </Modal>
      <div className='temp'>
      <div className='temp1_1'>
         <button type="button" onClick={() =>setModal(true)}>+Add Template</button>
         <button type="button">Delete Selected</button>
         <button type="button">Delete All</button>
       </div>
       <div className='temp2'>
             <div className="input-field">
                <label>Limit</label>
                  <select className='temp2_1' name="BranchName" required>
                      <option value="VGNDemo">20</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                 </select>
             </div>


             <div className="input-field">
                  <label>Search Type</label>
                    <select className='temp2_1' name="BranchName" required>
                      <option value="VGNDemo">All</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                    </select>
             </div>

         <div className='temp2_2'>
         <label></label><br/>
           <input type= "text" placeholder="Enter Search text" />
         </div>

        <div className='temp2_3'>
        <label></label><br/>
          <button type="button">Search</button>
        </div>

       <div className='temp2_4'>
         <label></label><br/>
         <button type="button">Reset</button>
       </div>
       <div className="input-field">
       <label></label><br/>
         <select className='temp2_1' name="BranchName" required>
           <option value="VGNDemo"><span><i className="fa fa-fw fa-download"></i></span>Download</option>
           <option value="Noida">Download CSV <span><i className="fa fa-fw fa-download"></i></span></option>
           <option value="Greater Noida">Download XLSX</option>
         </select>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Template;