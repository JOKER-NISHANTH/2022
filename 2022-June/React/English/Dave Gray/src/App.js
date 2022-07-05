
import './App.css';
function App() {
  const name = "Mr Black a.k.a Nishanth M"
  const handleNameChange = () => {
    const names = ['Black', "Brown", 'Red', "Blue"]
    const ran = Math.floor(Math.random() * 4)
    return names[ran]
  }
  return (
    <center>
      Hello world <br></br>
      <code>{ handleNameChange() }</code>
    </center>
  );
}

export default App;
