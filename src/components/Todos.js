import React from 'react'
import {useSelector} from 'react-redux'
import {
    removeTodo
} from '../features/todo/todoSlice'
import {
    useDispatch
} from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todos)
    
    const dispatch = useDispatch()
  return (
    <>
       <div>Todos</div>
       <ul className='list-none'>
       {todos.map((todo) =>(
            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}><div className='text-white'>{todo.text}</div>
            <button 
            onClick={()=>dispatch(removeTodo(todo.id))}
            className='text-white bg-red-500 p-1 rounded'>DELETE</button>
            </li>
       )
       )}
       </ul>
    </>
 
  )
}

export default Todos