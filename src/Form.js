import React, { useState } from "react";

function Form(){
  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(title)
    setTitle("")
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange}/>
      <input type="submit" />
    </form>
  )
}

export default Form