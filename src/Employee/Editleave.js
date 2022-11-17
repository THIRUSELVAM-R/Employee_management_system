import React from 'react';     
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';    
import axios from 'axios'    
import './Addleave'    
import 'bootstrap/dist/css/bootstrap.min.css';    
import { useParams } from "react-router-dom"; 
function withParams(Component) { 
  return props => <Component {...props} params={useParams()} />; 
} 

class Editleave extends React.Component {    
    constructor(props) {    
        super(props)         
    this.onChangeleave_start_date = this.onChangeleave_start_date.bind(this);    
    this.onChangeleave_end_date = this.onChangeleave_end_date.bind(this);    
    this.onChangeleave_type = this.onChangeleave_type.bind(this);
    this.onChangereason=this.onChangereason.bind(this);
    this.onChangeemp_id=this.onChangeemp_id.bind(this);
    this.onChangejob_id=this.onChangejob_id.bind(this);           
         this.state = {  
            leave_id:'',   
            leave_start_date:'',    
            leave_end_date:'',    
            reason: '',
            emp_id:'',
            job_id:''               
        }    
    }     
  componentDidMount() {   
    let param = this.props.params;    
    axios.get('https://localhost:44303/api/Leaves/'+param.leave_id)     
          .then(response => {    
              this.setState({   
                leave_id:response.data.leave_id,  
                leave_start_date: response.data.leave_start_date,     
                leave_end_date: response.data.leave_end_date,    
                leave_type: response.data.leave_type,
                reason:response.data.reason,
                emp_id:response.data.emp_id,
                job_id:response.data.job_id  
                 });    
          })    
          .catch(function (error) {    
              console.log(error);    
          })   
    }     

  onChangeleave_start_date(e) {    

    this.setState({    

        leave_start_date: e.target.value    

    });    
  }    

  onChangeleave_end_date(e) {    

    this.setState({    

        leave_end_date: e.target.value    

    });      
  }    
  onChangeleave_type(e) {    

    this.setState({    

        leave_type: e.target.value    

    });  
}

onChangereason(e) {    

    this.setState({    

        reason: e.target.value    

    });  
}

onChangeemp_id(e) {    

    this.setState({    

        emp_id: e.target.value    

    });  
}  

onChangejob_id(e) {    

    this.setState({    

        job_id: e.target.value    

    });  
}  
UpdateLeave=()=>{    

  const obj = { 

    leave_id:this.state.leave_id,  
    leave_start_date: this.state.leave_start_date,  
    leave_end_date: this.state.leave_end_date,  
    leave_type: this.state.leave_type,
    reason: this.state.reason,
    emp_id: this.state.emp_id,
    job_id: this.state.job_id
    }; 

    axios.put('https://localhost:44303/api/Leaves/', obj)    
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
  
             <h4 className="PageHeading">Update Leave Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="leave_start_date" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="datetime-local" name="leave_start_date" value={this.state.leave_start_date} onChange={this.onChangeleave_start_date}  
                                placeholder="Enter leave start date" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="leave_end_date" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="datetime-local" name="leave_end_date" value={this.state.leave_end_date} onChange={this.onChangeleave_end_date} placeholder="Enter leave end date" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="leave_type" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="leave_type" value={this.state.leave_type} onChange={this.onChangeleave_type} placeholder="Enter leave type" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="reason" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="text" name="reason"value={this.state.reason} onChange={this.onChangereason} placeholder="Enter reason" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="emp_id" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="emp_id"value={this.state.emp_id} onChange={this.onChangeemp_id} placeholder="Enter emp id" />  
                            </Col>  
                        </FormGroup>
                        <FormGroup row>  
                            <Label for="job_id" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="job_id"value={this.state.job_id} onChange={this.onChangejob_id} placeholder="Enter job_id" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success" onClick={this.UpdateLeave}>Submit</Button>{' '}  
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
export default withParams(Editleave);