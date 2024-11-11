import React from 'react';
import './student.css';
function Student(props) {
  return (
    <div className="iCard">
      <table >
        <tbody>
          <tr style={{backgroundColor:"pink"}}><td colSpan={2}>{props.college}</td></tr>
          <tr>
            <tr><td>Name</td><td>{props.name}</td></tr>
            <tr><td>Roll No</td><td>{props.roll}</td></tr>
            <tr><td>Branch</td><td>{props.branch}</td></tr>
            <tr><td>ID</td><td>{props.id}</td></tr>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student