import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Form from './Form';
function Work() {
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
<h1>Workexperience</h1>
<form onSubmit={handleSubmit(onSubmit)}>
   <Row>
      <Col lg={5} className='mt-3'>
      <label>Organisation Name :</label>
      </Col>
      <Col lg={7} className='mt-3'>
      <input type="text" placeholder="enter the Organisation Name" {...register('organisation', { required: "Organisation name is required", pattern: {
      value: /([a-zA-Z_$][a-zA-Z\d_$]*\.)*[a-zA-Z_$][a-zA-Z\d_$]*/g      ,
      message: "Enter the organisation name"
      }})}/>
      {errors.organisation && (
      <p className='text-danger'>{errors.organisation.message}</p>
      )}
      </Col>
      <Col lg={5} className='mt-3'>
      <label>Experience in Months :</label></Col>
      <Col lg={7} className='mt-3'>
      <input type="number" placeholder="enter the Experience in Months" {...register('months', { required: "Organisation name is required",})}/>
      {errors.months && (
      <p className='text-danger'>No.of Months is required.</p>
      )}
      </Col>
      <Col lg={5} className='mt-3'>
      <label>Joining Date :</label></Col>
      <Col lg={7} className='mt-3'>
      <input type="date" placeholder="enter the Organisation Name" {...register('joining', { required: "Organisation name is required",})}/>
      {errors.joining && (
      <p className='text-danger'>Joining Date is required.</p>
      )}
      </Col>
      <Col lg={5} className='mt-3'>
      <label>Ending Date :</label></Col>
      <Col lg={7} className='mt-3'>
      <input type="date" placeholder="enter the Organisation Name" {...register('ending', { required: "Organisation name is required",})}/>
      {errors.ending && (
      <p className='text-danger'>Ending date is required.</p>
      )}
      </Col>
   </Row>
   <Row className='text-center mt-3'>
      <Col sm={2} className="mx-auto">
      <Button className='mx-auto ms-5 me-5 btn-success' type="save">Save</Button>
      </Col>   
   </Row>
</form>
<br/><br/><br/>
<h1>Skills</h1>
<Form />
</>
);
}
export default Work;