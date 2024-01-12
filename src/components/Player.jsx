import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing((editing) => !editing) //This update gets the latest available state 
        //value for this editing state
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>

    if(isEditing) {
        editPlayerName = <input onChange={handleChange} type='text' required value={playerName}/>
    }

    return (
        <li className={isActive ? 'active' : null}>
          <span className='player'>
            {editPlayerName}
            {symbol}
            <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
          </span>
        </li>
    )
}