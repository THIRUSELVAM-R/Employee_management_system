import React from 'react';  
import axios from 'axios';
import '../Employee/Addemployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addleave extends React.Component
{  
constructor(props){  
super(props)  
this.state = {  
leave_start_date:'',  
leave_end_date:'',  
leave_type:'',  
reason:'',
emp_id:'',
job_id:''
}  
}   
Addleave=()=>{  
  axios.post('https://localhost:44303/api/leaves/', {leave_start_date:this.state.leave_start_date,leave_end_date:this.state.leave_end_date,  
  reason:this.state.reason,leave_type:this.state.leave_type, emp_id:this.state.emp_id,job_id:this.state.job_id})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");
//this.props.history.push('/Employeelist')    
}  
else{  
alert('Data Saved');  
debugger;
//this.props.history.push('/Employeelist')    
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter leave Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="leave_start_date" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="datetime-local" name="leave_start_date" onChange={this.handleChange} value={this.state.leave_start_date} placeholder="Enter start date" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="leave_end_date" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="datetime-local" name="leave_end_date" onChange={this.handleChange} value={this.state.leave_end_date} placeholder="Enter end date" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="leave_type" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="leave_type" onChange={this.handleChange} value={this.state.leave_type} placeholder="Enter leave type" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="reason" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="reason" onChange={this.handleChange} value={this.state.reason} placeholder="Enter reason" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="emp_id" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="emp_id" onChange={this.handleChange} value={this.state.emp_id} placeholder="Enter employee id" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="job_id" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="job_id" onChange={this.handleChange} value={this.state.job_id} placeholder="Enter job id" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addleave} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addleave;  