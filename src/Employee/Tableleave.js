import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Deleteleave= () =>{  
     axios.delete('https://localhost:44303/api/Leaves/'+this.props.obj.leave_id)  
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
            {this.props.obj.leave_start_date}  
          </td>  
          <td>  
            {this.props.obj.leave_end_date}  
          </td>  
          <td>  
            {this.props.obj.leave_type}  
          </td>  
          <td>  
            {this.props.obj.reason}  
          </td>
          <td>  
            {this.props.obj.emp_id}  
          </td> 
          <td>  
            {this.props.obj.job_id}  
          </td>
          <td>  
          <Link to={"/Editleave/"+this.props.obj.leave_id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.Deleteleave} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  