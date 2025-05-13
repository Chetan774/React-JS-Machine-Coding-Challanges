import { useReducer } from "react"

export const Main = () =>{
    const initialTodos = [
     {
        id:1, 
        task:"Task-1", 
        completed:false
     }, 
     {
        id:2, 
        task:"Task-2", 
        completed:false
     }

    ]   

    const reducer = (state, action)=>{
        switch(action.type){
            case'COMPLETED':
                return state.map((todo)=>{
                    if(todo.id === action.id){
                        return {...todo, completed:!todo.completed}
                    }else{
                        return todo;
                    }
                })
            case 'DELETE':
                return state.filter((todo)=>{
                  return todo.id !== action.id
                })
            default:
                return state;
            }
        }


    const [todos, dispatch] = useReducer(reducer,initialTodos);

    const handleChange = (id) =>{
        dispatch({type:'COMPLETED', id:id})
    }
    const handleDelete = (item) =>{
        dispatch({type:'DELETE', id:item.id})
    }

    return (
<div>
    {todos.map((item) => (
      <div key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={()=> handleChange(item.id)}
        />
        {item.task}
        <button onClick={()=> handleDelete(item)}>Delete</button>
      </div>
    ))}
  </div>
);
}