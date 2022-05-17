import React, {useState, useEffect} from "react"
import axios from "axios"
import ListCustomer from "./components/list_customer"

function dataCustomer () {
    const [customers, setCustomers] = useState([])

    useEffect(()=>{
        //mengambil data
        axios.get("http://localhost:3002/customer").then((res)=>{
            console.log(res.data)
            setCustomers(res.data)
        })
    }, [])

    return(
        <div className="row">
            {customers.map((customer)=>{
                return(
                <ListCustomer
                id= {customer.id_customer}
                key= {customer.id_customer}
                name= {customer.name_customer}
                mobile= {customer.mobile_customer}
                email= {customer.email_customer}/>
                )
            })} 
        </div>
    )
}

export default dataCustomer