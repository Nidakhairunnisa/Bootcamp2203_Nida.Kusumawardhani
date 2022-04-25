import { useState } from 'react'
import NavbarComp from './components/navbarComp';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast} from 'react-bootstrap';


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
          <p>
            <button  class="btn btn-primary" type="button" onClick={() => setCount((count) => count + 1)}>
              Add
            </button>
            <button class="btn btn-primary" type="button" onClick={() => setCount((count) => count - 1)}>
              Reduce
            </button>
          </p>
          <p>
            Quantity : {count}
          </p>
        </Toast.Body>
        </Toast>
    </div>
  )
}

export default App