import React from 'react';  
import axios from 'axios';
import '../Employee/Addemployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Financelist from './Financelist';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addfinance extends React.Component
{  
constructor(props){  
super(props)  
this.state = {  
amount:'',  
date_time:'',  
emp_id:'',  
job_id:''  
}  
}   
Addfinance=()=>{  
  axios.post('https://localhost:44303/api/Finances/', {amount:this.state.amount,date_time:this.state.date_time,  
  emp_id:this.state.emp_id, job_id:this.state.job_id})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");
//this.props.history.push('/Financelist')    
}  
else{  
alert('Data Saved');  
debugger;
//this.props.history.push('/Financelist')    
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Finance Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="amount" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="amount" onChange={this.handleChange} value={this.state.amount} placeholder="Enter amount" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="date_time" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="datetime-local" name="date_time" onChange={this.handleChange} value={this.state.date_time} placeholder="Enter date time" />  
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
          <button type="button" onClick={this.Addfinance} className="btn btn-success">Submit</button>  
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
   
export default Addfinance;  