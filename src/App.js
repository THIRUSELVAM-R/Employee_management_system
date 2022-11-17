/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Addemployee from './Employee/Addemployee';  
import Employeelist from './Employee/Employeelist';  
import Adddepartment from './Employee/Adddepartment';
import Addfinance from './Employee/Addfinance';
import Departmentlist from './Employee/Departmentlist';
import Financelist from './Employee/Financelist';
import './App.css';
import Addleave from './Employee/Addleave';
import Leavelist from './Employee/Leavelist';
import Addempbutton from './Employee/Addempbutton';
import Editemployee from './Employee/Editemployee';
import Editdepartment from './Employee/Editdepartment';
import Editfinance from './Employee/Editfinance';
import Editleave from './Employee/Editleave';
import Salary from './Employee/Salary';
import Filtersalary from './Employee/Filtersalary';
class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			{/*<li>
				<Link to="/">Home</Link>
			</li>*/}
			{/* <li>
				<Link to="/Adddepartment">Employee</Link>
			</li>
      <li>
        <Link to="/Addemployee">Department</Link>
      </li>
      <li>
        <Link to="/Addfinance">Finance</Link>
      </li>
      <li>
        <Link to="/Addleave">Leave</Link>
      </li> */}
      <li>
				<Link to="/Departmentlist">Employeelist</Link>
			</li>
      <li>
				<Link to="/Employeelist">Departmentlist</Link>
			</li>
      <li>
				<Link to="/Financelist">Financelist</Link>
			</li>
      <li>
        <Link to="/Leavelist">Leavelist</Link>
      </li>
      <li>
        <Link to="/Filtersalary">Salary</Link>
      </li>
			</ul>
		<Routes>
				<Route exact path='/' element={< App />}></Route>
				<Route exact path='/Adddepartment' element={< Adddepartment />}></Route>
        <Route exact path='/Addemployee' element={<Addemployee/>}></Route>
        <Route exact path='/Addfinance' element={<Addfinance/>}></Route>
        <Route exact path='/Addleave' element={<Addleave/>}></Route>
        <Route exact path='/Departmentlist' element={< Departmentlist/>}></Route>
        <Route exact path='/Employeelist' element={< Employeelist />}></Route>
        <Route exact path='/Financelist' element={< Financelist />}></Route>
        <Route exact path='/leavelist' element={< Leavelist />}></Route>
        <Route exact path='Employeelist/Addemployee' element={< Addemployee/>}></Route>
        <Route exact path='Departmentlist/Adddepartment' element={< Adddepartment/>}></Route>
        <Route exact path='Financelist/Addfinance' element={< Addfinance/>}></Route>
        <Route exact path='Leavelist/Addleave' element={< Addleave/>}></Route>
        <Route exact path='Editemployee/:job_id' element={<Editemployee/>}></Route>
        <Route exact path='Editdepartment/:emp_id' element={<Editdepartment/>}></Route>
        <Route exact path='Editfinance/:salary_id' element={<Editfinance/>}></Route>
        <Route exact path='Editleave/:leave_id' element={<Editleave/>}></Route>
        <Route exact path='Salary/:emp_id' element={<Salary/>}></Route>
        <Route exact path='Filtersalary' element={<Filtersalary/>}></Route>
		</Routes>
		</div>
	</Router> 
);
}
}
export default App;
