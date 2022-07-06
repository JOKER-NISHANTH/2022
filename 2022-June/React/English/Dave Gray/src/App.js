import {useState} from "react"
import './App.css';

import Header from './components/Header';
import Content from "./components/Content"
import Footer from "./components/Footer"
import AddItem from "./components/AddItem";

function App() {
  // const initialState = [{id: 1, checked: true,item:"Apple"},
  // {id: 2, checked: false,item:"Orange"},
  //   { id: 3, checked: false, item: "Mango" },]

  const initialState = JSON.parse((localStorage.getItem('shoppinglist')) )
  const [items, setItems] = useState(initialState);

const [newItem, setNewItem] = useState('')

const setAndSaveItems = (listItems) => {
  setItems(listItems)
  localStorage.setItem("shoppinglist", JSON.stringify(listItems));
}

const handleCheck = (id) => {
  console.log(`Key ID : ${id}`)
  const listItems = items.map(
    (item) =>  item.id === id ? { ...item, checked: !item.checked }:item
  )
  setAndSaveItems(listItems)
}

const handleDelete = (id) => {
  // console.log(id)
  const listItems = items.filter((item) => (item.id !== id))
  setAndSaveItems(listItems)
}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item };
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems)
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}


  return (
    <div className='App'>
      <Header title="Groceries" />
      <AddItem
        newItem= {newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />
      <Footer len={ items.length} />
    </div>
  );
}

export default App;
