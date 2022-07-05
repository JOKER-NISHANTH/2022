import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Black', "Brown", 'Red', "Blue",'Green']
        const ran = Math.floor(Math.random() * names.length)
        return names[ran]
  }

  {/* Normal function */}
  const handleClick = () => {
    console.log("you clicked")
  }
  {/* Passing Value to function */}
  const handleClick2 = (name) => {
    console.log(`${name} was cliecked` )
  }
  {/* event objects */ }
  const handleClick3 = (e) => {
    // console.log(`Event Objects \n ${e}` )
    // console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)
    e.target.innerText = "after clicked"

  }
  return (
      <main>
      <p>Hello {handleNameChange()}!</p>
      {/* Normal function call using function reference */}
      <button onClick={handleClick}>Click It</button>
      {/* Passing Value to function */}
      <button onClick={()=>handleClick2('Mr Black')}>Click It</button>{/* Event Object */}
      <button onClick={(e)=>handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content