import React from 'react';  
import axios from 'axios';
import '../Employee/Addemployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Adddepartment extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
name:'',  
age:'',  
contact_no:'',
email:'',
qualification:'',
role:'',
join_date:'',
releive_date:''
}  
}   
Adddepartment=()=>{  
  axios.post('https://localhost:44303/api/Employees/', {name:this.state.name,  
  age:this.state.age, contact_no:this.state.contact_no , email:this.state.email, qualification:this.state.qualification, role:this.state.role,
join_date:this.state.join_date,releive_date:this.state.releive_date})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");
this.props.history.push('/Departmentlist')    
}  
else{  
alert('Data Saved');  
debugger;
this.props.history.push('/Departmentlist')    
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
          <Label for="name" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter the name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="age" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="number" name="age" onChange={this.handleChange} value={this.state.age} placeholder="Enter age" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="contact_no" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="contact_no" onChange={this.handleChange} value={this.state.contact_no} placeholder="Enter contact number" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="email" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter Employee email" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="qualification" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="qualification" onChange={this.handleChange} value={this.state.qualification} placeholder="Enter Employee qualification" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="role" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="text" name="role" onChange={this.handleChange} value={this.state.role} placeholder="Enter Employee role" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="join_date" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="datetime-local" name="join_date" onChange={this.handleChange} value={this.state.join_date} placeholder="Enter Employee id" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="releive_date" sm={2}></Label>  
          <Col sm={10}>  
            <Input type="datetime-local" name="releive_date" onChange={this.handleChange} value={this.state.releive_date} placeholder="Enter Employee id" />  
          </Col>  
        </FormGroup> 
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Adddepartment} className="btn btn-success">Submit</button>  
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
   
export default Adddepartment;  