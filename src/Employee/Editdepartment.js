import React from 'react';     
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';    
import axios from 'axios'    
import './Adddepartment'    
import 'bootstrap/dist/css/bootstrap.min.css';    
import { useParams } from "react-router-dom"; 
function withParams(Component) { 
  return props => <Component {...props} params={useParams()} />; 
} 

class Editdepartment extends React.Component {    
    constructor(props) {    
        super(props)         
    this.onChangename = this.onChangename.bind(this);    
    this.onChangeage = this.onChangeage.bind(this);    
    this.onChangecontact_no = this.onChangecontact_no.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangequalification=this.onChangequalification.bind(this);
    this.onChangerole=this.onChangerole.bind(this);
    this.onChangejoin_date=this.onChangejoin_date.bind(this);
    this.onChangereleive_date=this.onChangereleive_date.bind(this)           
         this.state = {  
            emp_id:'',   
            name: '',    
            age: '',    
            contact_no: '',
            email:'',
            qualification:'',
            role:'',
            join_date:'',
            releive_date:''               
        }    
    }     
  componentDidMount() {   
    let param = this.props.params;    
    axios.get('https://localhost:44303/api/Employees/'+param.emp_id)     
          .then(response => {    
              this.setState({   
                emp_id:response.data.emp_id,  
                name: response.data.name,     
                age: response.data.age,    
                contact_no: response.data.contact_no,
                email:response.data.email,
                qualification:response.data.qualification,
                role:response.data.role,
                join_date:response.data.join_date,
                releive_date:response.data.releive_date  
                 });    
          })    
          .catch(function (error) {    
              console.log(error);    
          })   
    }     

  onChangename(e) {    

    this.setState({    

        name: e.target.value    

    });    
  }    

  onChangeage(e) {    

    this.setState({    

        age: e.target.value    

    });      
  }    
  onChangecontact_no(e) {    

    this.setState({    

        contact_no: e.target.value    

    });  
}

onChangeemail(e) {    

    this.setState({    

        email: e.target.value    

    });  
}

onChangequalification(e) {    

    this.setState({    

        qualification: e.target.value    

    });  
}  

onChangerole(e) {    

    this.setState({    

        role: e.target.value    

    });  
}  

onChangejoin_date(e) {    

    this.setState({    

        join_date: e.target.value    

    });  
}  

onChangereleive_date(e) {    

    this.setState({    

        releive_date: e.target.value    

    });  
}  
UpdateDepartment=()=>{    

  const obj = { 

    emp_id:this.state.emp_id,  
    name: this.state.name,  
    age: this.state.age,  
    contact_no: this.state.contact_no,
    email: this.state.email,
    qualification: this.state.qualification,
    role: this.state.role,
    join_date: this.state.join_date,
    releive_date: this.state.releive_date 
    }; 

    axios.put('https://localhost:44303/api/Employees/', obj)    
  .then(json => {    
  if(json.data!==null && json.status===200){    
    console.log(json.data.Status);    
    alert("Data Save Successfully");    
  }    
  else{    
    console.log(json); 
  alert('Data Saved');    
  }   
  })    
  }    
    render() {    

        return (    

            <Container className="App">  
  
             <h4 className="PageHeading">Update Employee Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="name" value={this.state.name} onChange={this.onChangename}  
                                placeholder="Enter name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="age" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="age" value={this.state.age} onChange={this.onChangeage} placeholder="Enter age" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="contact_no" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="contact_no" value={this.state.contact_no} onChange={this.onChangecontact_no} placeholder="Enter number" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="email" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="email"value={this.state.email} onChange={this.onChangeemail } placeholder="Enter email" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="qualification" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="qualification"value={this.state.qualification} onChange={this.onChangequalification } placeholder="Enter qualification" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="role" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="role"value={this.state.role} onChange={this.onChangerole } placeholder="Enter role" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="join_date" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="datetime-local" name="join_date"value={this.state.join_date} onChange={this.onChangejoin_date} placeholder="Enter join date" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="releive_date" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="datetime-local" name="releive_date"value={this.state.releive_date} onChange={this.onChangereleive_date} placeholder="Enter releive date" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success" onClick={this.UpdateDepartment}>Submit</Button>{' '}  
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
export default withParams(Editdepartment);