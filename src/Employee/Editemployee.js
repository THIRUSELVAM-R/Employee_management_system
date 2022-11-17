import React from 'react';     
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';    
import axios from 'axios'    
import './Addemployee'    
import 'bootstrap/dist/css/bootstrap.min.css';    
import { useParams } from "react-router-dom"; 
function withParams(Component) { 
  return props => <Component {...props} params={useParams()} />; 
} 

class Editemployee extends React.Component {    
    constructor(props) {    
        super(props)         
    this.onChangejob_dept = this.onChangejob_dept.bind(this);    
    this.onChangejob_name = this.onChangejob_name.bind(this);    
    this.onChangesalary_range = this.onChangesalary_range.bind(this);
    this.onChangeemp_id=this.onChangeemp_id.bind(this)           
         this.state = {  
            job_id:'',   
            job_dept: '',    
            job_name: '',    
            salary_range: '',
            emp_id:''               
        }    
    }     
  componentDidMount() {   
    let param = this.props.params;    
    axios.get('https://localhost:44303/api/jobdepts/'+param.job_id)     
          .then(response => {    
              this.setState({   
                job_id:response.data.job_id,  
                job_dept: response.data.job_dept,     
                job_name: response.data.job_name,    
                salary_range: response.data.salary_range,
                emp_id:response.data.emp_id  
                 });    
          })    
          .catch(function (error) {    
              console.log(error);    
          })   
    }     

  onChangejob_dept(e) {    

    this.setState({    

        job_dept: e.target.value    

    });    
  }    

  onChangejob_name(e) {    

    this.setState({    

        job_name: e.target.value    

    });      
  }    
  onChangesalary_range(e) {    

    this.setState({    

        salary_range: e.target.value    

    });  
}

onChangeemp_id(e) {    

    this.setState({    

        emp_id: e.target.value    

    });  
}  
UpdateEmployee=()=>{    

  const obj = { 

    job_id:this.state.job_id,  
    job_dept: this.state.job_dept,  
    job_name: this.state.job_name,  
    salary_range: this.state.salary_range,
    emp_id: this.state.emp_id 
    }; 

    axios.put('https://localhost:44303/api/jobdepts/', obj)    
  .then(json => {    
  if(json.data!==null && json.status===200){    
    console.log(json.data.Status);    
    alert("Data Save Successfully");    
  }    
  else{    
    console.log(json); 
  alert('Data not Saved');    
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
                            <Label for="job_dept" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="job_dept" value={this.state.job_dept} onChange={this.onChangejob_dept}  
                                placeholder="Enter department" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="job_name" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="job_name" value={this.state.job_name} onChange={this.onChangejob_name} placeholder="Enter jobname" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="salary_range" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="salary_range" value={this.state.salary_range} onChange={this.onChangesalary_range} placeholder="Enter salary" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="emp_id" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="emp_id"value={this.state.emp_id} onChange={this.onChangeemp_id } placeholder="Enter id" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success" onClick={this.UpdateEmployee}>Submit</Button>{' '}  
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
export default withParams(Editemployee);