
import logo from './logo.svg';
import './App.css';

function StudentInfo(props) {
  return (
    <>
      <h2>Welcome to Fullstack Development - I</h2>
      <h3>React JS Programming Week09 Lab exercise</h3>
      <h4>Student ID: {props.studentId}</h4>
      <h5>Student Name: {props.studentName}</h5>
      <h6>College: {props.college}</h6>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <StudentInfo
          studentId="101571040"
          studentName="Jenifa Joseph"
          college="George Brown Polytechnic, Toronto"
        />
      </header>
    </div>
  );
}

export default App;
