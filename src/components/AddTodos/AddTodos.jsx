import React,{useState} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {addTodo} from "../../actions/index"

const AddTodos = () => {

    const [input,setInput]=useState([])
    // const list = useSelector((state)=>state.todoReducer.list)
    const dispatch =useDispatch()

  return (
    <>
            <input type="text" name="userInput" value = {input} onChange={(e)=>setInput(e.target.value)}></input>
            <input type="submit" name='btn' onClick={()=>dispatch(addTodo(input) ,setInput(' '))}></input>
             {/* {
           list.map((elem)=>(<h1>{elem.data}</h1>))
       }   */}
       
       </>
  
  )
}
export default AddTodos

