import React from "react";
import moment from 'moment'

export default class Calendar extends React.Component{

  state = {
    dateObject: moment()
  }

  // firstDayOfMonth = () => {
  //   let dateObject = this.state.dateObject;
  //   let firstDay = moment(dateObject)
  //                  .startOf("month")
  //                  .format("d");
  //   return firstDay;
  // }

  weekdayshort = moment.weekdaysShort();
  render(){
    let weekdayshortname =  this.weekdayshort.map(day => {
      return(
        <th key={day} >
          {day}
        </th>
      );
    })
    return (
      <div>
        <h2>Calendar</h2>
        <tr>{weekdayshortname}</tr>
      </div>
    );
  }
}
