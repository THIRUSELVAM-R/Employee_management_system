import React from 'react';     
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';    
import axios from 'axios'    
import './Addfinance'    
import 'bootstrap/dist/css/bootstrap.min.css';    
import { useParams } from "react-router-dom"; 
function withParams(Component) { 
  return props => <Component {...props} params={useParams()} />; 
} 

class Editfinance extends React.Component {    
    constructor(props) {    
        super(props)         
    this.onChangeamount = this.onChangeamount.bind(this);    
    this.onChangedate_time = this.onChangedate_time.bind(this);    
    this.onChangeemp_id = this.onChangeemp_id.bind(this);
    this.onChangejob_id=this.onChangejob_id.bind(this)           
         this.state = {  
            salary_id:'',   
            amount:'',    
            date_time:'',    
            emp_id: '',
            job_id:''               
        }    
    }     
  componentDidMount() {   
    let param = this.props.params;    
    axios.get('https://localhost:44303/api/Finances/'+param.salary_id)     
          .then(response => {    
              this.setState({   
                salary_id:response.data.salary_id,  
                amount: response.data.amount,     
                date_time: response.data.date_time,    
                emp_id: response.data.emp_id,
                job_id:response.data.job_id  
                 });    
          })    
          .catch(function (error) {    
              console.log(error);    
          })   
    }     

  onChangeamount(e) {    

    this.setState({    

        amount: e.target.value    

    });    
  }    

  onChangedate_time(e) {    

    this.setState({    

        date_time: e.target.value    

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
UpdateFinance=()=>{    

  const obj = { 

    salary_id:this.state.salary_id,  
    amount: this.state.amount,  
    date_time: this.state.date_time,  
    emp_id: this.state.emp_id,
    job_id: this.state.job_id 
    }; 

    axios.put('https://localhost:44303/api/Finances/', obj)    
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
  
             <h4 className="PageHeading">Update Finance Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="amount" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="amount" value={this.state.amount} onChange={this.onChangeamount}  
                                placeholder="Enter amount" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="date_time" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="datetime-local" name="date_time" value={this.state.date_time} onChange={this.onChangedate_time} placeholder="Enter date time" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="emp_id" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="emp_id" value={this.state.emp_id} onChange={this.onChangeemp_id} placeholder="Enter emp id" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="job_id" sm={2}></Label>  
                            <Col sm={10}>  
                                <Input type="number" name="job_id"value={this.state.job_id} onChange={this.onChangejob_id } placeholder="Enter job id" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success" onClick={this.UpdateFinance}>Submit</Button>{' '}  
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
export default withParams(Editfinance);