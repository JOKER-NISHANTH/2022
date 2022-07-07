
import { FaPlus } from 'react-icons/fa'
import {useRef} from "react"

const AddItem = ({handleSubmit ,newItem,setNewItem}) => {
  const inputRef = useRef();
  return (
      <form action="" className="addForm" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="addItem">Add List</label>
          <input
            type="text"
            autoFocus
            ref={inputRef}
            id="addItem"
            placeholder='Add List'
            required
            value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
          />
          <button
              type="submit"
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
          >
                <FaPlus />
          </button>
    </form>
  )
}

export default AddItem