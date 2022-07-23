import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
export default function HalfRating() {
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
<form onSubmit={handleSubmit(onSubmit)}>
   <Row>
      <Col lg={6} sm={8} className='mt-2'>
      <label className='me-5'>Select :</label>                 
      <select className='me-5'{...register('selection', { required: "Selection is required"})}>
      <option value="">select</option>
      <option value="Ror">Ror</option>
      <option value="React">React</option>
      <option value="Native">Native</option>
      </select>
      {errors.selection && (
      <p className='text-danger'>{errors.selection.message}</p>
      )}
      </Col>
      <Stack spacing={1}>
         <Rating name="half-rating" defaultValue={2.5} precision={0.5}  />
      </Stack>
   </Row>
   <Row className='text-center mt-3'>
      <Col sm={2} className="mx-auto">
      <Button className='mx-auto ms-5 me-5 btn-success' type="save">Save</Button>
      </Col>   
   </Row>
</form>
</>
);
}