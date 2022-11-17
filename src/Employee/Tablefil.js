import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteEmployee= () =>{  
     axios.delete('https://localhost:44303/api/jobdepts/'+this.props.obj.job_id)  
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
            {this.props.obj.job_dept}  
          </td>  
          <td>  
            {this.props.obj.job_name}  
          </td>  
          <td>  
            {this.props.obj.salary_range}  
          </td>  
          <td>  
            {this.props.obj.emp_id}  
          </td>  
          <td>  
          <Link to={"/Editemployee/"+this.props.obj.job_id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteEmployee} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;   