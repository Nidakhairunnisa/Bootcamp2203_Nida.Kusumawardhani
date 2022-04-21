import React, { Component } from "react";
import {Card} from 'react-bootstrap';

export default class card extends Component{
    render(){
        const contact =[
            {name: "Nida", email: "nida@gmail.com", mobile: "087821611580"},
            {name: "Hasna", email: "hasna@gmail.com", mobile: "087821619876"},
            {name: "Nisa", email: "nisa@gmail.com", mobile: "087821611234"},
            {name: "Sasa", email: "sasa@gmail.com", mobile: "087821614325"},
            {name: "Nusa", email: "nusa@gmail.com", mobile: "087821619854"},
          ];
          const renderCard = (card) =>{
            return(
                <Card style={{width: "18rem", flexWrap:"wrap"}}>
                <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                  <Card.Text>
                    {card.email} <br/>
                    {card.mobile}
                  </Card.Text>
                </Card.Body>
                </Card>
        )
        }
        return(
            <div className="card-group">
                {contact.map(renderCard)}
            </div>
        )
    }
}