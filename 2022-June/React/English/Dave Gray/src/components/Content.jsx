

import ItemList from "./ItemList";
const Content = ({items,setItems,handleDelete,handleCheck}) => {


  return (
      <main>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={ handleDelete} />
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