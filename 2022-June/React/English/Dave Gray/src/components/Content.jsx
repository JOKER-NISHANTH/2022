import React,{useState} from 'react'

const Content = () => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count+1)
  }
  const handleMinus = () => {
    console.log(count)
    if (!count > 0) return  alert("Negative value not allowed")
    setCount(count - 1)
  }

  return (
      <main>

      {/* Count */}
      <p> Current Count : {count}</p>
      <button onClick={handlePlus} style={{ width:'80px',height:'20px', borderRadius:'5px'}}>+</button> <br />
      <button onClick={handleMinus} style={{ width:'80px',height:'20px', borderRadius:'5px'}}>-</button>

    </main>
  )
}

export default Content