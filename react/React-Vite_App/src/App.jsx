import React from 'react';
import Student from './student';



function App() {
  let a=12;
  const myStyle={
    backgroundColor:'white',
    color:'cyan'
  }
  return (
    <div style={myStyle}>ABES Engg College
      <div style={myStyle}>{a}</div>
      <div>
        <Student college="ABES Engg College" name="Asad" roll="36" branch="CSE" id="201"/>
      </div>
    </div>
    
  )
}

export default App