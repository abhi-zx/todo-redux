const Add_Todos ="Add_Todos"
 const addTodo =(data)=>({
    type: "Add_Todos",
   payload:{
       id: Date.now(),
       data:data
   }
})
const Delete_Todos ="Delete_Todos"
 const deleteTodo =(id)=>({
    type:"Delete_Todos",
    id
})
export {addTodo,deleteTodo}