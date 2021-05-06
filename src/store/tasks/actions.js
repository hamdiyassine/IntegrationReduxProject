import { GET_TASKS, GET_TASKS_FAIL, GET_TASKS_SUCCESS ,
  ADD_TASK , ADD_TASK_SUCCESS , ADD_TASK_FAIL ,
  DELETE_TASK , DELETE_TASK_SUCCESS , DELETE_TASK_FAIL} from "./actionTypes"

export const getTasks = () => ({
  type: GET_TASKS,
})

export const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks,
})

export const getTasksFail = error => ({
  type: GET_TASKS_FAIL,
  payload: error,
})



export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
})

export const addTaskSuccess = task => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
})

export const addTaskFail = error => ({
  type: ADD_TASK_FAIL,
  payload: error,
})


export const deleteTask = () => ({
  type: DELETE_TASK,
})

export const deleteTaskSuccess = task => ({
  type: DELETE_TASK_SUCCESS,
  payload: task,
})

export const deleteTaskFail = error => ({
  type: DELETE_TASK_FAIL,
  payload: error,
})