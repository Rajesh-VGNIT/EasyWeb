import React, { useState } from 'react'
import './contact.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios';
import Phonebook from '../Phonebook';

const Contact = () => {

  // pop-up code
const [modal, setModal] = useState(false)
//update/create data




const handleSubmit = (e) => {
 e.preventDefault();
 axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
    
     
    
    
 });
 }

  return (
    <div className='contact'>
      <Phonebook />
      <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
         <h5 style={{marginLeft:"15px"}}>Add contacts</h5>
       <p style={{color:"#aaa",fontSize:"14px"}}>Add contacts individually or in bulk</p>
       </ModalHeader>
         <ModalBody >
           <form onSubmit={handleSubmit}>
            
             <Row style={{border:"1.5px solid #aaa",marginLeft:"5px",marginRight:"5px",paddingTop:"10px",borderRadius:"5px"}}>
               <Col lg={12}>
                 <div>
                   <h6 style={{marginLeft:"15px"}}>
                   Add Single Contact<span style={{color:"#dc3545"}}>*</span>
                   </h6>
                  <p><span><input type="checkbox" /> Choose this if you want to upload contacts individually</span></p>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <h6 style={{marginLeft:"15px"}}>
                   Upload Bulk Contact<span style={{color:"#dc3545"}}>*</span>
                   </h6>
                  <p><span><input  type="checkbox" /> Choose this if you want to upload contacts individually</span></p>
                 </div>
               </Col>

               </Row>
           </form>
           
           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Add
       </button>
       <button  className='btn mt-3' type='submit' style={{ backgroundColor: "#fff",color:"#aaa", float:"right",marginRight:"20px" }} >
           cancel
       </button>
         </ModalBody>
    </Modal>
      <div className='contact1'>
        <div className='contact2'>
           <button type="button" onClick={() =>setModal(true)}>+Add Contacts</button>
        </div>

        <div className='contact3'>
          <div className="contact3_1">
            <label>Select Group</label>
            <select name="Type" required >
               <option value="Single Package">All</option>
               <option value="Noida">Noida</option>
               <option value="Greater Noida">Greater Noida</option>
            </select>
          </div>
         
          <div className="contact3_2">
           <label>Mobile(Optional)</label>
            <input type="text" placeholder='Mobile' />
          </div>

          <div className="contact3_3">
           <label>Limit</label>
             <select name="Type" required >
              <option value="Single Package">20</option>
              <option value="Noida">50</option>
              <option value="Greater Noida">60</option>
            </select>
          </div>

          <div className="contact3_4">
             <label></label><br/>
             <button type='button'>Search</button>
          </div>

          <div className="contact3_5">
            <label></label><br/>
            <button type='button'>Delete Selected</button>
          </div>

          <div className="contact3_6">
            <label></label><br/>
            <button type='button'>Delete All</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;