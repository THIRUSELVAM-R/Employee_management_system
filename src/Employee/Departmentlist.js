import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Tabledep';  
import Adddepbutton from './Adddepbutton';
  
export default class Departmentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44303/api/Employees/')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Employee List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>Age</th>  
                <th>Contact Number</th>  
                <th>Email</th>
                <th>Qualification</th>
                <th>Role</th>
                <th>Join Date</th>
                <th>Releive Date</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>
          <Adddepbutton/>  
        </div>  
      );  
    }  
  }  