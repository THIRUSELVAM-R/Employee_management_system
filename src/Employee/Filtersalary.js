import React from 'react';   
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Tablefil'; 
import './Filtersalary.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';   
class Filtersalary extends React.Component{   
    constructor(props) {   
        super(props);   
        this.state = { 
            business: [], 
            salary_range:'' 
        };   
      } 
Func=()=>{  
    debugger; 
      axios.get('https://localhost:44303/api/jobdepts/GetSalrangeFilter/'+this.state.salary_range)   
        .then(response => {   
          this.setState({ business: response.data });   
          debugger;  
        })   
        .catch(function (error) {   
          console.log(error);   
        })   
        document.querySelector('#three').style.color='black';
    }   
handleChange= (e)=> {   
this.setState({[e.target.name]:e.target.value});   
}   
tabRow(){   
    return this.state.business.map(function(object, i) 
    {   
        return <Table obj={object} key={i} />;   
    });   
  }  
render() {   
return (   
    <div> 
   <Container className="one" id="container">   
    <Form id="form">   
      <Col>   
      <FormGroup row>   
          <Label for="salary_range" sm={2}></Label>   
          <Col sm={6}>   
          <Input type="number" name ="salary_range" onChange={this.handleChange}  placeholder="Enter salary range" />   
          </Col>   
        </FormGroup>   
          <Col >   
          <button type="button" onClick={this.Func} className="btn btn btn-outline-success" id="two">Submit</button>   
          </Col>   
          <Col >     
          </Col>   
      </Col>   
    </Form>  
  </Container>  
  <div> 
     <h4 align="center"></h4>  
          <table className="table table-striped" id="three"style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Job Dept</th>  
                <th>job name</th>  
                <th>salary range</th>  
                <th>emp id</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
</div>   
);   

}   

}   

    

export default Filtersalary;