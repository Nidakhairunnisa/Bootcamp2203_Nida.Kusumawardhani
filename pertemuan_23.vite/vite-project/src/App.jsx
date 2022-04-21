import { useState } from 'react'
import NavbarComp from './components/navbarComp';
import Card from './components/card';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast} from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)
  // const contact =[
  //   {name: "Nida", email: "nida@gmail.com", mobile: "087821611580"},
  //   {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"},
  //   {name: "Nisa", email: "nisa@gmail.com", mobile: "087821611234"},
  // ];
  // const renderCard = (card) =>{
  //     return(
  //         <Card style={{width: "18rem", flexWrap:"wrap", display: "flex", justifycontent: "space-between"}}>
  //         <Card.Body>
  //         <Card.Title>{card.name}</Card.Title>
  //           <Card.Text>
  //             {card.email} <br/>
  //             {card.mobile}
  //           </Card.Text>
  //         </Card.Body>
  //         </Card>
  //     )
  // }  
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
      <Card/>
    </div>
  )
}

export default App
