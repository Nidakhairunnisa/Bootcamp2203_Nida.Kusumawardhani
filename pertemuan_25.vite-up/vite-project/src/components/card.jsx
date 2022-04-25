import React from "react";
import {Card, Button} from 'react-bootstrap';
import './card.css'

function card (props){
  return(
    <Card>
    <Card.Body>
    <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        {props.email} <br/>
        {props.mobile} <br/>
        <Button variant="warning">Update</Button>
        <Button variant="danger">Delete</Button>
      </Card.Text>
    </Card.Body>
    </Card>
)
}

export default card