import { GET_TASKS_SUCCESS, GET_TASKS_FAIL , ADD_TASK_SUCCESS , ADD_TASK_FAIL ,
  DELETE_TASK_SUCCESS , DELETE_TASK_FAIL  } from "./actionTypes"

const INIT_STATE = {
  tasks: [
    {
      id: 11,
      description: "Create Dashboard UI",
     
    },
    {
      id: 12,
      description: "Create New Landing UI",
      
    },
    {
      id: 13,
      description: "Create Logo",
      
    },
  ],
  error: {},
}

const tasks = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      }

    case GET_TASKS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADD_TASK_SUCCESS:
      console.log("////// new task : ",action.payload)
      let task_list = state.tasks
      task_list.push(action.payload)
      return {
        ...state,
        tasks: task_list,
      }
  
    case ADD_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    
    case DELETE_TASK_SUCCESS:
      let tasks_list = state.tasks
      const new_tasks = []
      tasks_list.forEach(item => {
        if(item.id != action.payload.id){
          new_tasks.push(item)
        }
      });
        return {
          ...state,
          tasks: new_tasks,
        }
    
    case DELETE_TASK_FAIL:
        return {
          ...state,
          error: action.payload,
        }

    default:
      return state
  }
}

export default tasks
