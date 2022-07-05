import React,{useState} from 'react'

const Content = () => {

  const [name, setName] = useState("Black");
  const [count,setCount] = useState(0)

  const handleNameChange = () => {
        const names = ['Black', "Brown", 'Red', "Blue",'Green']
        const ran = Math.floor(Math.random() * names.length)
        setName(names[ran])
  }
  {/* Count functions */ }
  const handlePlus = () => {
    setCount(count+1)
  }
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      alert("Negative value not allowed")
    }
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
      <p onDoubleClick={handleClick}

      >Hello {name}!
      </p>
      <button onClick={handleNameChange} >Name Change</button>

      {/* Normal function call using function reference */}
      <button onClick={handleClick}>Click It</button>

      {/* Passing Value to function */}
      <button onClick={() => handleClick2('Mr Black')}>Click It</button>

      {/* Event Object */}
      <button onClick={(e)=>handleClick3(e)}>Click It</button>

      {/* Count */}
      <p> Current Count : {count}</p>
      <button onClick={handlePlus} style={{ width:'80px',height:'20px', borderRadius:'5px'}}>+</button> <br />
      <button onClick={handleMinus} style={{ width:'80px',height:'20px', borderRadius:'5px'}}>-</button>

    </main>
  )
}

export default Content