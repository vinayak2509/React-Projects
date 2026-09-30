import { useRef, useState } from "react"
import Modal from "./Modal"

export default function NewTask({onAdd}){

  const [enteredTask, setEnteredTask] = useState('')
  const modalRef = useRef()

  function handleChange(event){
    setEnteredTask(event.target.value)
  }

  function handleClick(){
    if(enteredTask.trim()===''){
      modalRef.current.open()
      return
    }
    onAdd(enteredTask)
    setEnteredTask('')
  }

   return <div className="flex items-center gap-4">
     <Modal ref={modalRef} buttonCaption={'Okay'}><div><p className="text-stone-800 my-4">Please enter task name</p></div></Modal>
    <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
    <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
      Add Task
    </button>
   </div>
}