import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';
import './card.css'

export default class card extends Component{
    render(){
        const contact =[
            {name: "Nida", email: "nida@gmail.com", mobile: "087821611580"},
            {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"},
            {name: "Nisa", email: "nisa@gmail.com", mobile: "087821611234"},
            {name: "Sasa", email: "sasa@gmail.com", mobile: "087821614325"},
            {name: "Nusa", email: "nusa@gmail.com", mobile: "087821619854"},
            {name: "Nusa", email: "nusa@gmail.com", mobile: "087821619854"},
            {name: "Nusa", email: "nusa@gmail.com", mobile: "087821619854"},
            {name: "Nusa", email: "nusa@gmail.com", mobile: "087821619854"},
            {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"},
            {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"},
            {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"}, 
            
          ];
          const renderCard = (card) =>{
            return(
                <Card>
                <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                  <Card.Text>
                    {card.email} <br/>
                    {card.mobile}
                    <Button variant="warning">Update</Button>
                    <Button variant="danger">Delete</Button>
                  </Card.Text>
                </Card.Body>
                </Card>
        )
        }
        return(
            <div className="card-columns">
              <div class="card">
              {contact.map(renderCard)}
              </div>
            </div>
        )
    }
}