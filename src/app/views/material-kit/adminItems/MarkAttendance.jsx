import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../../attendance/attApp.css';
//import Header from './components/layout/Header';
import Class from '../../../attendance/Class';
import List from '../../../../data/students.json';


class App extends React.Component {
  // Set students.json as state for list of students
  state = {
    students: List
  }

  // Toggle present
  studentPresent = (id) => {
    this.setState({students: this.state.students.map(student => {
      if(student.id === id) {
        student.present = !student.present
      }
      return student;
    })});
  }

  render() {
    const linkStyle = {
      color: '#82A7DC',
      textDecoration: 'none'
    }

    return (
        <React.Fragment>
   

          {/* Main page */}
         
            <React.Fragment>
              <table>
                <tr>
                    <th>Student ID</th>
                    <th className="nameCol">Student Name</th>
                    <th className="switchCol">Attendance</th>
                </tr>
              </table>
              <Class students={this.state.students} studentPresent={this.studentPresent} />

              {/* Redirect to summary page */}
              <Link to="/summary">
                <button className="btn" onClick={this.gotoSummary}>Submit</button>
              </Link>
            </React.Fragment>

          {/* Summary page */}
          
            <React.Fragment>            
              <div className="">
                <h1>Attendance Summary</h1>
                {/* Get total number of present students */}
                {this.state.students.filter(student => student.present).length} students attended today's class
              </div>

              <Link style={linkStyle} to="/">Back</Link>
            </React.Fragment>
        
        </React.Fragment>
    );
  }
}

export default App;
