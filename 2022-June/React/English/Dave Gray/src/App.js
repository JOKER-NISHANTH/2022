import {useState} from "react"
import './App.css';

import Header from './components/Header';
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  const initialState = [{id: 1, checked: true,item:"Apple"},
  {id: 2, checked: false,item:"Orange"},
    { id: 3, checked: false, item: "Mango" },]
  const [items, setItems] = useState(initialState);

  return (
    <div className='App'>
      <Header title="Groceries"/>
      <Content items={items} setItems={ setItems} />
      <Footer len={ items.length} />
    </div>
  );
}

export default App;
