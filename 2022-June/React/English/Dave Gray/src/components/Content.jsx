
import ItemList from "./ItemList";
const Content = ({items,setItems}) => {


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