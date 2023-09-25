import React, { useState } from 'react'
import './CampaignSMS1.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios';
import CampaignSMS from './CampaignSMS';

const CampaignSMS1 = () => {

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
    <div className='campiSm'>
    <CampaignSMS />
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
  <div className='campiSm1'> 

  <input className='campiSm1_1' type="file" />
  <p style={{marginLeft:"-15px"}}>Download Sample File&nbsp;<span><img src="/Images/download.svg" alt='wel' /></span></p>
  {/*===========Step1============= */}
   <div className='campiSm2'>
   <div  className="campiSm2_1">
   <label>Campaign Name <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   <div className="campiSm2_2">
     <label></label><br/>
     <p><span onClick={() =>setModal(true)}>+</span></p>
   </div>

   <div  className="campiSm2_1">
   <label>Sender ID <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value=""></option>
   </select>
   </div>

   </div>
 

   {/*===========Step2============= */}
   <div className='campiSm3'>
     <label>Recipients<span style={{color:"red"}}>*(New Number on New Line)</span></label><br/>
     <textarea type="text" placeholder='Enter Numbers' />
     <div  className="campiSm3_1">
     <label>Select Groups</label><br/>
     <select name="Type" required >
      <option value=""></option>
     </select>
     </div>
     <div className="campiSm3_2">
       <h4><span><img src="/Images/clear-icon.svg" alt='wel'/></span>clear</h4>
     </div>

     <div className="campiSm3_3">
        <p><span><input type="checkbox" /></span> &nbsp; Remove Duplicate Numbers &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        <p><span><input type="checkbox" /></span> &nbsp; Var with 30 Characters &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        <p><span><input type="checkbox" /></span> &nbsp; Remove Invalid Numbers &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        </div>

     <div className="campiSm3_4">
     <label>Content<span style={{color:"red"}}>*</span></label><br/>
     <input type="text" placeholder='Enter SMS contact here' />
     </div> 

     <div className="campiSm3_5">
       <p><span><img src="/Images/template.svg" alt="wel" /></span> Insert Template <span style={{color:"red"}}>*</span></p>
      <div className='unicode234'>
      <span><img src="/Images/language.svg" alt="wel" /></span>
          <select name="Type" required >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujrati</option>
          <option value="bn">Bengali</option>
          <option value="kn">Kannada</option>
          <option value="or">Oriya</option>
         </select>
        </div>
       <p><span><img src="/Images/url.svg" alt="wel" /></span> Insert URL</p>
       <p><span><img src="/Images/clear-icon.svg" alt="wel" /></span> clear</p>
     </div> 

     <div className="campiSm3_6">
       <p style={{color:"red",fontSize:"1.2rem"}}>0 characters 1 SMS Credits</p>
       <p><span><img style={{width:"20px"}} src="/Images/save-template-icon.svg" alt="wel" /></span>&nbsp;&nbsp;Save as Template</p>
   </div>
   
   <div className="campiSm3_7">
      <p><span><input type="checkbox" /></span> &nbsp; Allow Multi Part SMS
      &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Allow Unicode &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Send as Flash SMS &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
   </div>
   <div className="campiSm3_7">
      <p><span><input type="checkbox" /></span> &nbsp; Schedule SMS</p>
      <p className='campiSm3_7_1'><span><input type="checkbox" /></span> &nbsp; Scrub DND </p>
   </div>

   <div className="campiSm3_8">
      <button className="campiSm3_8_1" type='button'>Cancel</button>
      <button className="campiSm3_8_2" type='button'>Save as Draft</button>
      <button className="campiSm3_8_3" type='button'>Send</button>
   </div>

   </div>
</div>
  </div>
  )
}

export default CampaignSMS1;