import React, { useState } from 'react'
import './DynamicTemplateSMS.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios';
import MultipleDynamicSMS from './MultipleDynamicSMS';

const DynamicTemplateSMS = () => {

   // pop-up code
const [modal, setModal] = useState(false)
//update/create data
const [templateName, setTemplateName] = useState('')
const [campaignName, setCampaignName] = useState('')


const handleSubmit = (e) => {
 e.preventDefault();
 axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
     e_templateName:templateName,
     e_campaignName:campaignName,
    
    
 });
 }

  return (
    <div className='dynamicTemp'>
    <MultipleDynamicSMS />
    <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
         <h6>Add Campaign</h6>
       <p style={{color:"#aaa",fontSize:"14px",marginLeft:"-15px"}}>Add a new Campaign by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Campaign Name'>
                   Campaign Name<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setCampaignName(e.target.value)} type="text" placeholder='Enter Campaign Name' />
                 </div>
               </Col>

              <Col lg={12}>
                 <div>
                   <label htmlFor='Description'>
                   Description
                   </label>
                   <textarea className="form-control" onChange = {(e) => setTemplateName(e.target.value)} type="text" placeholder='Enter Description'></textarea>
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
  <div className='dynamicTemp1'> 

  <input className='dynamicTemp1_1' type="file" />

  <p style={{marginLeft:"-15px"}}>Download Sample File&nbsp;<span><img src="/Images/download.svg" alt='wel' /></span></p>
  {/*===========Step1============= */}
   <div className='dynamicTemp2'>
   <div  className="dynamicTemp2_1">
   <label>Campaign Name <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   <div className="dynamicTemp2_2">
     <label></label><br/>
     <p><span onClick={() =>setModal(true)}>+</span></p>
   </div>

   <div  className="dynamicTemp2_1">
   <label>Sender ID <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   </div>


  {/*===========Step1.1============= */}
   <div className='dynamicTemp2'>
   <div  className="dynamicTemp2_11">
   <label>Select Recipient Column  <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   <div  className="dynamicTemp2_11">
   <label>Select Template Content Column <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   <div  className="dynamicTemp2_11">
   <label>Select Template ID Column </label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   </div>


   {/*===========Step2============= */}
   <div className='dynamicTemp3'>
    
    <div className="dynamicTemp3_1">
      <p><span><input type="checkbox" /></span> &nbsp; Allow Multi Part SMS
      &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Allow Unicode &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Send as Flash SMS &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
   </div>
   <div className="dynamicTemp3_2">
      <p><span><input type="checkbox" /></span> &nbsp; Schedule SMS</p>
      <p className='dynamicTemp3_3'><span><input type="checkbox" /></span> &nbsp; Scrub DND </p>
   </div>

   <div className="dynamicTemp3_4">
      <button className="dynamicTemp3_4_1" type='button'>Cancel</button>
      <button className="dynamicTemp3_4_2" type='button'>Save as Draft</button>
      <button className="dynamicTemp3_4_3" type='button'>Send</button>
   </div>

   </div>
</div>
  </div>
  )
}

export default DynamicTemplateSMS;