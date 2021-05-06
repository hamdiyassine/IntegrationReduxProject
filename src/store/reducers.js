import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

//tasks
import tasks from "./tasks/reducer"


const rootReducer = combineReducers({
  // public
  Layout,
  tasks
})

export default rootReducer
