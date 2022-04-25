import React, {useState, useEffect} from "react"
import axios from "axios"
import ListContact from './components/card'

function Contact () {
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        //mengambil data
        axios.get("http://localhost:4000/dataContact").then((res)=>{
            console.log(res.data)
            setContacts(res.data)
        })
    }, [])

    return(
        <div className="row">
            {contacts.map((contact)=>{
                return(
                <ListContact
                id= {contact.id}
                key= {contact.id}
                name= {contact.name}
                email= {contact.email}
                mobile= {contact.mobile}/>
                )
            })}
        </div>
    )
}

export default Contact