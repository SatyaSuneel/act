import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Profile() {
  return (
  	<div className="Profile mt-5">
    <br/><br/>
        <h1>Profile</h1>
        <Container>
        

            <Row>
            <Col lg={6} sm={8} className='mt-2 align-right' >
                    <label>First Name :</label>
                    <input type="text"  className='ms-5' placehollder="enter the First Name" required/>
                </Col>
            <Col lg={6} sm={8} className='mt-2 align-right' >
                
                    <label>Last Name :</label>
                    <input type="text" placehollder="enter the Last Name"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2' >
                    <label className=' align-right'>Date of Birth :</label>
                    <input  type="date" className='ms-4' placehollder="enter the date of birth"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2 align-right'>
                    <label >Gender :</label>
                    <select className='ms-4'>
                        <option value="none">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2' >
                <label>Nationality :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Indian">Indian</option>
                        <option value="Non-Indian">Non-Indian</option>
                    </select>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Martial Status :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="number" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Company Email :</label>
                    <input type="email" placehollder="enter the company email"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Personal Email :</label>
                    <input type="email" placehollder="enter the personal email"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Current address :</label>
                    <textarea rows={5} cols={30} placeholder="Enter your address"></textarea>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Permanent adddress :</label>
                    <textarea rows={5} cols={30} placeholder="Enter your address"></textarea>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
            <Row>
                <fieldset>
                    <legend className='mt-4'>Person 1</legend>
                <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Name :</label>
                    <input type="text" placehollder="enter the name"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="nummber" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Relationship :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Husband">Huusband</option>
                        <option value="Cousin">Cousin</option>
                        <option value="Others">Others</option>
                    </select>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Address :</label>
                    <textarea rows={3} cols={30} placeholder="Enter your address"></textarea>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
                </fieldset>
            </Row>
            <Row>
                <fieldset>
                    <legend className='mt-4'>Person 2</legend>
                <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Name :</label>
                    <input type="text" placehollder="enter the name"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="nummber" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Relationship :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Husband">Huusband</option>
                        <option value="Cousin">Cousin</option>
                        <option value="Others">Others</option>
                    </select>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label className='mt-5'>Address :</label>
                    <textarea rows={3} cols={30} placeholder="Enter your address"></textarea>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
                </fieldset>
            </Row>
        </Container>
    </div>


  );
}

export default Profile;