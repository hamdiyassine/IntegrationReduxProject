import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { withRouter } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { getTasks , addTaskSuccess} from "../../store/tasks/actions"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

class TasksCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      name : ''
    }
    this.startDateChange.bind(this)
    this.changeName.bind(this)
  }

  startDateChange = date => {
    this.setState({
      startDate: date,
    })
  }

  changeName = taskName => {
    this.setState({
      name: taskName,
    })
  }

  addTask = ()=>{
    const { addTask  } = this.props
    const {name , startDate } = this.state
    const task = {description : name, id:startDate}
    //console.log("task to add : ",task);
    if(name != '') addTask(task)

    this.setState({
      name : ''
    })
    this.props.getTasksList()
    
  }
  

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <h2>Create Task </h2>
          </MetaTags>
          <Container fluid>

            <Row>
              <Col lg="12">
                <Card >
                  <CardBody>
                    <CardTitle className="mb-4">Create New Task</CardTitle>
                    <form className="outer-repeater">
                      <div data-repeater-list="outer-group" className="outer">
                        <div data-repeater-item className="outer">
                          <FormGroup className="mb-4" row>
                            <Label
                              htmlFor="taskname"
                              className="col-form-label col-lg-2"
                            >
                              Task Name
                            </Label>
                            <Col md="6">
                              <Input
                               // onChange={this.changeName}
                                onChange={(e) => this.changeName(e.target.value)}
                                id="taskname"
                                name="taskname"
                                type="text"
                                className="form-control"
                                placeholder="Enter Task Name..."
                              />
                            </Col>
                          </FormGroup>

                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2">
                              Task Date
                            </Label>
                            <Col lg="10">
                              <Row>
                                <Col md="6" className="pe-md-0 md-pe-3">
                                  <DatePicker
                                    className="form-control"
                                    selected={this.state.startDate}
                                    onChange={this.startDateChange}
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </FormGroup>

                        </div>
                      </div>
                    </form>
                    <Row className="justify-content-end">
                      <Col lg="10">
                        <Button type="submit" color="primary" onClick={()=>this.addTask()}>
                          Create Task
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}


TasksCreate.propTypes = {
  onGetTasks: PropTypes.func,
  addTask: PropTypes.func,
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
  addTask : (task) => dispatch(addTaskSuccess(task)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksCreate))