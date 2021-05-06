import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap"
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

import TasksCreate from "../Tasks/tasks-create"
import { getTasks , deleteTaskSuccess} from "../../store/tasks/actions"

class TasksList extends Component {
  state = {
    tasks : []
  }

  componentDidMount() {
    this.getTasksList()
  }

  getTasksList(){
    const { onGetTasks , tasks } = this.props
    onGetTasks()
    this.setState({tasks})
  }

  // componentDidUpdate(){
  //   const {  tasks } = this.props
  //   const tasks_list = this.state.tasks
  //   //console.log("new tasks : ",tasks);
  //   //this.setState({tasks})
  //   if(tasks.length > tasks_list.length){
  //     console.log("tasks list : ",tasks);
      
  //     this.getTasksList()
      
  //   }
    
  // }

  deleteTask = (task)=>{
    const {tasks } = this.state
    const tasks_list = []
    tasks.forEach(item => {
      if(item.id != task.id){
        tasks_list.push(item)
      }
    });
    this.props.deleteTask(task)
    this.setState({taks:tasks_list})
  }

  render() {
    //const { tasks } = this.props
    
    let tasks = [
      {
        id: 1,
        title: "Tasks",
        tasks : this.state.tasks
      }
    ]

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Task List </title>
          </MetaTags>
          <TasksCreate getTasksList={()=>this.getTasksList()}/>
          <Container fluid>
            {/* <Breadcrumbs title="Tasks" breadcrumbItem="Task List" /> */}
            {/* Render Breadcrumbs */}
            <Row>
              <Col lg={8}>
                {map(tasks, (task, i) => (
                  <Card key={i}>
                    <CardBody>
                      <CardTitle className="mb-4">{task.title}</CardTitle>
                      <div className="table-responsive">
                        <table className="table table-nowrap align-middle mb-0">
                          <tbody>
                            {map(this.props.tasks, (item, i) => (
                              <tr key={i}>
                                <td style={{ width: "40px" }}>
                                  <div className="form-check font-size-16">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={item.id}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={item.id}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <h5 className="text-truncate font-size-14 m-0">
                                    <Link to="#" className="text-dark">
                                      {item.description}
                                    </Link>
                                  </h5>
                                </td>
                               
                                <td>
                                  <i class="bx bx-trash" style={{fontSize:'20px',cursor:'pointer'}}
                                   onClick={()=>this.deleteTask(item)}>

                                  </i>
                                </td>
                              </tr>

                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </Col>

            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  onGetTasks: PropTypes.func,
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
  deleteTask: (task) => dispatch(deleteTaskSuccess(task)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksList))
