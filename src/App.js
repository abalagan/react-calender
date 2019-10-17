import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calender/';


const style = {
  position: "relative",
  margin: "50px auto",
  maxHeight: "277px"
}
const labelStyle = {
  padding: "20px",
  margin: "3px",
  fontWeight: "500"
}
const inputStyle = {
  marginTop: "100px"
}


class App extends Component {
  state= {
    date: 'dd/mm/yyyy'
  }
  onDayClick = (e, day, dateContext) => {
    console.log("Date:" ,day, dateContext.format("MM"), dateContext.format("Y"));
    document.querySelector('#dateInputField').value=`${day}/${dateContext.format("MM")}/${dateContext.format("Y")}`;
  }
  displayCalender = () => {
   document.querySelector('.full-container').style.display = "flex";
  }

  componentDidMount = () => {
    this.hideDatePicker();
  }
  hideDatePicker = function() {
    document.querySelector('.full-container').style.display = "none";
  }
  
  render() {
    return (
      <div className="App">
        <label style={labelStyle}>Date: </label>
        <input id="dateInputField" style={inputStyle} placeholder="Click to display DatePicker" onFocus={this.displayCalender}></input>
        <Calendar style={style} width="302px" 
          onDayClick={(e, day, dateContext)=> this.onDayClick(e, day, dateContext)}/> 
      </div>
    );
  }
}

export default App;
