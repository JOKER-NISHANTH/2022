import {useState , useEffect} from "react"
import './App.css';

import Header from './components/Header';
import Content from "./components/Content"
import Footer from "./components/Footer"
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
  // const initialState = [{id: 1, checked: true,item:"Apple"},
  // {id: 2, checked: false,item:"Orange"},
  //   { id: 3, checked: false, item: "Mango" },]
  const initialState =  JSON.parse((localStorage.getItem('shoppinglist')) )
  const [items, setItems] = useState(initialState || []);
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
},[items])

  // console.log("Before useEffect")
  // useEffect(() => {
  //   console.log("Inside useEffect")
  // },[items])
  // console.log("After useEffect")

// ? Result
  /**
   * Before useEffect
   * After useEffect
   * Inside useEffect
   * useEffect async
   */

const handleCheck = (id) => {
  console.log(`Key ID : ${id}`)
  const listItems = items.map(
    (item) =>  item.id === id ? { ...item, checked: !item.checked }:item
  )
  setItems(listItems)
}

const handleDelete = (id) => {
  // console.log(id)
  const listItems = items.filter((item) => (item.id !== id))
  setItems(listItems)
}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item };
  const listItems = [...items, myNewItem];
  setItems(listItems)
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}

  const [search, setSearch] = useState('')

  return (
    <div className='App'>
      <Header title="Todo List" />
      <AddItem
        newItem= {newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

        <SearchItem
        search={search}
        setSearch={setSearch}

      />

      <Content
        items={items.filter(
          item =>
            (
              (item.item).toLowerCase()
            ).includes(search)
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />

      <Footer len={items.length} />


    </div>
  );
}

export default App;
