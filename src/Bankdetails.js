 import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {
  CDBSidebarMenuItem,
} from 'cdbreact';




function Bankdetails() {
const {
register,
handleSubmit,
formState: { errors }, reset
} = useForm();
const onSubmit = (data) => {console.log(data);
reset();
}
return(
<>
<br/><br/><br/>
<h1>Bankdetails</h1>
<form onSubmit={handleSubmit(onSubmit)}>
   <Row>
      <Col lg={5} className='mt-3'>
         <label>BankName :</label> 
      </Col>
      <Col lg={5} className='mt-3'>
         <input type="text" placeholder="Enter the Bankname"
            {...register('Bankname', { required: "Bankname is required", pattern: {
            value: /([a-zA-Z_$][a-zA-Z\d_$]*\.)*[a-zA-Z_$][a-zA-Z\d_$]*/g,
            message: "Please Enter a Valid Bankname"
            }})}

         /> 
         


   
      {errors.Bankname && (
      <p className='text-danger'>{errors.Bankname. message}</p>
      )}
      </Col>
      <Col lg={2}>
              <CDBSidebarMenuItem icon="edit"></CDBSidebarMenuItem>
              </Col>

      
      <Col lg={5} className='mt-3'>
      <label>AccountNumber :</label></Col>
      <Col lg={5} className='mt-3'>
      <input type="text" placeholder="Enter the Accountnumber" {...register('Accountnumber', { required: "Accountnumber is required", pattern: {
      value: /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/     ,
      message: "Enter the Accountnumber"
      }})}/>
      {errors.Accountnumber && (
      <p className='text-danger'>{errors.Accountnumber. message}</p>
      )}
      </Col>
      <Col lg={2} className='mt-3'>
         <CDBSidebarMenuItem icon="edit"></CDBSidebarMenuItem>
      </Col>
      <Col lg={5} className='mt-3'>
      <label>IFSC Code  :</label></Col>
      <Col lg={5} className='mt-3'>
      <input type="text" placeholder="IFSC Code" {...register('IFSCCode', { required: "IFSCCode is required", pattern: {
      value: "/[A-Za-z0-9_@./#&+-]*$/"
      }})}/>
      {errors.IFSCCode && (
      <p className='text-danger'>IFSCCodeis required.</p>
      )}
      </Col>
      <Col lg={2} className='mt-3'>
         <CDBSidebarMenuItem icon="edit"></CDBSidebarMenuItem>
      </Col>
      <Col lg={5} className='mt-3'>
      <label>Branch Name  :</label></Col>
      <Col lg={5} className='mt-3'>
      <input type="text" placeholder="Enter the BranchName" {...register('BranchName', { required: "BranchName is required",pattern:{
      value:  /([a-zA-Z_$][a-zA-Z\d_$]*\.)*[a-zA-Z_$][a-zA-Z\d_$]*/g      ,
      message: "Enter the BranchName"
      } })}/>
      {errors.BranchName && (
      <p className='text-danger'>{errors.BranchName. message}</p>
      )}
      </Col>
      <Col lg={2} className='mt-3'>
         <CDBSidebarMenuItem icon="edit"></CDBSidebarMenuItem>
      </Col>
      <Row className='text-center mt-3'>
         <Col sm={2} className="mx-auto">
         <Button className='mx-auto ms-5 me-5 btn-success' type="save">Save</Button>
         </Col>   
      </Row>
   </Row>
</form>
</>
);
}
export default Bankdetails;







