import React from 'react';  
import axios from 'axios';
import '../Employee/Addemployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addemployee extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
job_dept:'',  
job_name:'',  
salary_range:'',  
emp_id:''  
}  
}   
Addemployee=()=>{  
  axios.post('https://localhost:44303/api/jobdepts/', {job_dept:this.state.job_dept,job_name:this.state.job_name,  
  salary_range:this.state.salary_range, emp_id:this.state.emp_id})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");
this.props.history.push('/Employeelist')    
}  
else{  
alert('Data  Saved');  
debugger;
this.props.history.push('/Employeelist')    
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Department Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="job_dept" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="job_dept" onChange={this.handleChange} value={this.state.job_dept} placeholder="Enter job department" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="job_name" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="job_name" onChange={this.handleChange} value={this.state.job_name} placeholder="Enter job name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="salary_range" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="salary_range" onChange={this.handleChange} value={this.state.salary_range} placeholder="Enter salary" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="emp_id" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="emp_id" onChange={this.handleChange} value={this.state.emp_id} placeholder="Enter Employee id" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addemployee} className="btn btn-success">Submit</button>  
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
   
export default Addemployee;  