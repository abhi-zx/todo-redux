import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { deleteTodo } from '../../actions';
import './List.css';
const List = () => {
  const dispatch =useDispatch()
  const list = useSelector((state) => state.todoReducer.list)

  return (
   <ul>
     {console.log("anny")}
    {list.map(item =>{
      return (
        <div key={item.id} className="abc">
          <h1>{item.data}</h1>
          <button onClick={()=>dispatch(deleteTodo(item.id) )}>Delete</button>
        </div>
      )
    })}

   </ul>
  )
}

export default List