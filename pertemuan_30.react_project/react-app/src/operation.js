import React, {useState, useEffect} from "react"
import axios from "axios"
import ListCustomer from "./components/table-listcust"

function operation () {
    const [operations, setOperations] = useState([])

    useEffect(()=>{
        //mengambil data
        axios.get("http://localhost:3000/customer").then((res)=>{
            console.log(res.data)
            setContacts(res.data)
        })
    }, [])

    return(
        <div className="row">
            {operations.map((operation)=>{
                return(
                < ListCustomer
                id_customer= {operation.id_customer}
                key= {operation.id_customer}
                name_customer= {operation.name_customer}/>
                )
            })}
        </div>
    )
}

export default operation