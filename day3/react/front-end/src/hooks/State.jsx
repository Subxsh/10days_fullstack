import {useState} from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }


    const [like,setlike]=useState(0)
    const handleLike=()=>{
        setlike(like+1)
    }
    const [dislike,setdislike]=useState(0)
    const handleDislike=()=>{
        setdislike(dislike+1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment {count}</button>
        <button onClick={handleLike}>Like❤️{like}</button>
        <button onClick={handleDislike}>Dislike😒{dislike}</button>
    </div>
  )
}

export default State
