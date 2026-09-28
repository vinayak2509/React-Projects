import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onNameChange }){
  const [playerName, setPlayerName]= useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEdit(){
    setIsEditing(editing=>!editing)
    if(isEditing){
      onNameChange(symbol, playerName)
    }
    
  }

  function handleChange(event){
    setPlayerName(event.target.value)
  }

  let nameField = undefined
  let btnName = undefined
  if(isEditing===true){
    nameField = <input type="text" required value={playerName} onChange={handleChange}/>
    btnName = 'save'
  } else{
    nameField = <span className="player-name">{playerName}</span>
    btnName = 'edit'
  }

  return(
    <li className={isActive?'active':undefined}>
      <span className="player">
        {nameField}        
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnName}</button>
    </li>
  )
}