import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteEmployee= () =>{  
     axios.delete('https://localhost:44303/api/Employees/'+this.props.obj.emp_id)  
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
            {this.props.obj.name}  
          </td>  
          <td>  
            {this.props.obj.age}  
          </td>  
          <td>  
            {this.props.obj.contact_no}  
          </td>  
          <td>  
            {this.props.obj.email}  
          </td>
          <td>  
            {this.props.obj.qualification}  
          </td> 
          <td>  
            {this.props.obj.role}  
          </td>
          <td>  
            {this.props.obj.join_date}  
          </td>
          <td>  
            {this.props.obj.releive_date}  
          </td>
          <td>  
          <Link to={"/Editdepartment/"+this.props.obj.emp_id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteEmployee} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  