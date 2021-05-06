import React, { Component } from "react"

import TasksList from "../Tasks/tasks-list"

class Dashboard extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="page-content">
          
          <div style={{marginTop:'-250px'}}>
          <TasksList />
          </div>
            
          
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
