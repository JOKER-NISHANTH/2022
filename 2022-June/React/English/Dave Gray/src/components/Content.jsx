

import ItemList from "./ItemList";
const Content = ({items,setItems,handleDelete,handleCheck}) => {


  return (
      <>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={ handleDelete} />
      ) : (
          // alert("No Data")
          <p style={{
            marginTop:'2rem',
            color:'red'
          }}>Your List is empty</p>
      )}
    </>
  )
}

export default Content