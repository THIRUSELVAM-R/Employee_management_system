import React from 'react';     
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';    
import axios from 'axios'    
import './Addemployee'    
import 'bootstrap/dist/css/bootstrap.min.css';    
import { useParams } from "react-router-dom"; 
function withParams(Component) { 
  return props => <Component {...props} params={useParams()} />; 
} 

let data;
let data1;
let data2;
let data3;
class Salary extends React.Component {       
  componentDidMount() {   
    let param = this.props.params;    
    axios.get('https://localhost:44303/api/jobdepts/Getfinallsal/'+param.emp_id)  
        .then(response => {  
         this.setState({ business: response.data });  
          console.log(response.data);
          data=response.data;  
          data1=param.emp_id;
          debugger;  
        })  
        .catch(function (error) {  
          console.log(error);  
        });
        axios.get('https://localhost:44303/api/Employees/'+param.emp_id)  
        .then(response => {  
          this.setState({ business: response.data });  
          console.log(response.data.name);
          data2=response.data.name;
          debugger;   
        })  
        .catch(function (error) {  
          console.log(error);  
        })        
    }     
/*EmployeeSalary=()=>{    

    let param = this.props.params;    
    axios.get('https://localhost:44303/api/jobdepts/Getfinallsal/'+param.job_id)  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
  } */
    render() {    

        return (    
 
            <div>  
          <h4 align="center">Salary Information</h4>  
          <table className="table table-striped" style={{ marginTop: 10}}>  
            <thead>  
              <tr>  
                <th>Job Id</th>
                <th>Name</th>  
                <th>Salary</th> 
              </tr>  
            </thead>  
            <tbody>  
            <tr>  
            <td>  
            {data1}  
            </td>  
            <td>  
            {data2}  
            </td>
            <td>
            {data}
            </td>
            </tr>
            </tbody>  
          </table>
        </div>  
        );    
    }    
}    
export default withParams(Salary);