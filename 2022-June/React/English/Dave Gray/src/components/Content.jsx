import React,{useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const initialState = [
    {id: 1, checked: true,item:"Apple"},
    {id: 2, checked: false,item:"Orange"},
    {id: 3, checked: false,item:"Mango"},
]
  const [items, setItems] = useState(initialState);

  const handleCheck = (id) => {
    console.log(`Key ID : ${id}`)
    const listItems = items.map(
      (item) =>  item.id === id ? { ...item, checked: !item.checked }:item
    )
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    // console.log(id)
    const listItems = items.filter((item) => (item.id !== id))
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }
  return (
      <main>
      {items.length ? (
        <ul >
          {
            items.map((item) => {
              return (
                <li className="item" key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                  />

                  <label
                    style={
                      (item.checked) ? { textDecoration: 'line-through' } : null
                    }
                    onDoubleClick={() => handleCheck(item.id)}
                  >{item.item}</label>

                  <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(item.id)}
                  />
                </li>
              )
            })
          }
        </ul>
      ) : (
          // alert("No Data")
          <p style={{
            marginTop:'2rem',
            color:'red'
          }}>Your List is empty</p>
      )}
    </main>
  )
}

export default Content