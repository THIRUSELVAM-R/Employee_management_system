import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Tableleave';  
import Addleavebutton from './Addleavebutton';
export default class Leavelist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44303/api/Leaves/')  
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
          <h4 align="center">Leave List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Leave Start Date</th>  
                <th>Leave End Date</th>  
                <th>Leave Type</th>  
                <th>Reason</th>
                <th>Emp Id</th>
                <th>Job Id</th>
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>
          <Addleavebutton/>  
        </div>  
      );  
    }  
  }  