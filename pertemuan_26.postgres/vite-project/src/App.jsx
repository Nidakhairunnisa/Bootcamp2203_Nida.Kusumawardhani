import { useState } from 'react'
import NavbarComp from './components/navbarComp';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, Button} from 'react-bootstrap';


function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="App">
      <NavbarComp/>
        <Toast>
        <Toast.Header>
          <strong className="me-auto">Button Add</strong>
          <small> click button to change number </small>
        </Toast.Header>
        <Toast.Body>
        <Button variant="success"  onClick={() => setCount((count) => count + 1)}>Add</Button>
        <Button variant="danger"  onClick={() => setCount((count) => count - 1)}>Reduce</Button>
          <p>
            Quantity : {count}
          </p>
        </Toast.Body>
        </Toast>
    </div>
  )
}

export default App