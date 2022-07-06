
import './App.css';

import Header from './components/Header';
import Content from "./components/Content"
import Footer from "./components/Footer"
function App() {
  const items = [{id: 1, checked: true,item:"Apple"},
  {id: 2, checked: false,item:"Orange"},
  {id: 3, checked: false,item:"Mango"},]
  return (
    <div className='App'>
      <Header title="Groceries"/>
      <Content items={items} />
      <Footer len={ items.length} />
    </div>
  );
}

export default App;
