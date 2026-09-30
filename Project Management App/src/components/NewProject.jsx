import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd,onCancel}){
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  const modalRef = useRef()

  function handleSave(){
    const enteredTitle = titleRef.current.value
    const enteredDescriptionRef = descriptionRef.current.value
    const enteredDueDateRef = dueDateRef.current.value

    if (enteredTitle.trim() === '' ||
      enteredDescriptionRef.trim() === '' ||
      enteredDueDateRef.trim() === ''){
        modalRef.current.open()
        return
      }

    onAdd({
      title : enteredTitle,
      description : enteredDescriptionRef,
      dueDate : enteredDueDateRef
    })
  }

  return <>
    <Modal ref={modalRef} buttonCaption='Okay'>
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Looks like you forgot to enter a value</p>
      <p className='text-stone-600 mb-4'>Please make sure you provide a valid input to all fields</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input type='text' label='Title'  ref={titleRef}/>
        <Input label='Description' textarea ref={descriptionRef} />
        <Input type='date' label='Due Date' ref={dueDateRef}/>
      </div>
    </div>
  </>
}