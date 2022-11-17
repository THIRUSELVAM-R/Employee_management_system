import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Deletefinance= () =>{  
     axios.delete('https://localhost:44303/api/Finances/'+this.props.obj.salary_id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    } 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.amount}  
          </td>  
          <td>  
            {this.props.obj.date_time}  
          </td>  
          <td>  
            {this.props.obj.emp_id}  
          </td>  
          <td>  
            {this.props.obj.job_id}  
          </td>  
          <td>  
          <Link to={"/Editfinance/"+this.props.obj.salary_id} className="btn btn-success">Edit</Link>  
          </td> 
          <td>  
          <Link to={"/Salary/"+this.props.obj.emp_id} className="btn btn-success">salary</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.Deletefinance} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  