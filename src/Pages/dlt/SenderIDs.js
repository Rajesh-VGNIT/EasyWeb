import React, { useState } from 'react'
import './Sender.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios';
import Dlt from './Dlt'
const SenderIDs = (props) => {

   // pop-up code
   const [modal, setModal] = useState(false)
   //update/create data
   const [senderId, setSenderId] = useState('')
   

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
        e_senderId:senderId,
       
       
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
          Add Sender ID
       <p style={{color:"#aaa",fontSize:"14px"}}>Add a new Sender ID by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Sender ID'>
                   Sender ID<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setSenderId(e.target.value)} type="text" placeholder='Enter Sender ID' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Sender ID' style={{marginTop:"15px",marginBottom:"10px",color:"#a4a3ac"}} >
                   Sender ID must be 6 characters long
                   </label>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Select Entity Name'>
                   Select Entity Name<span style={{color:"#dc3545"}}>*</span>
                   </label><br/>
                   <select style={{width:"29rem",height:"40px",border:"1.5px solid #aaa",borderRadius:"3px"}}>
                    <option>0</option>
                   </select>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='' >
                    <span><input type='checkbox'/>Set as Default</span>
                   </label>
                 </div>
               </Col>
               <Col lg={12}>
                 <div>
                   <label htmlFor='' >
                   <span><input type='checkbox'/>Is Govt. Exempted</span>
                   </label>
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
    <div className='sender'>
    <div className='sender1_1'>
    <button type="button" onClick={() =>setModal(true)}>+Add Sender ID</button>
  </div>
  <div style={{overflowX:"hidden", width: "60%"}}className='sender2' >
  <Table>
   <Thead>
    <Tr>
      <Th>Sender ID</Th>
      <Th>Entity ID</Th>
      <Th>Approved By</Th>
      <Th>Approved On</Th>
      <Th>Status</Th>
      <Th>Default</Th>
      <Th>Action</Th>
    </Tr>
   </Thead>

   <Tbody>
     <Tr>
       <Td>1</Td>
       <Td>2</Td>
       <Td>3</Td>
       <Td>4</Td>
       <Td>5</Td>
       <Td>6</Td>
       <Td>7</Td>
     </Tr>
     <Tr>
       <Td>1</Td>
       <Td>2</Td>
       <Td>3</Td>
       <Td>4</Td>
       <Td>5</Td>
       <Td>6</Td>
       <Td>7</Td>
     </Tr>
   </Tbody>

 </Table>
 </div>
    </div>
    </div>
   
  )
}

export default SenderIDs;