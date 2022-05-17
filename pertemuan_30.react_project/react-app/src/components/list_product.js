// import { useState, useEffect } from 'react';
// // import { Link } from "react-router-dom";
// import {Table, Button} from 'react-bootstrap';
//import axios from 'axios';
// function ListCustomer() {
//     const [customers, setCustomers] = useState([]);
//     useEffect(() => {

//         //panggil method "fetchData"
//         fectData();

//     }, []);

//     //function "fetchData"
//     const fectData = async () => {
//         //fetching
//         const response = await axios.get('http://localhost:3002/customer');
//         //get response data
//         const data = await response.data.data;

//         //assign response data to state "posts"
//         setCustomers(data);
//     }
//     return(
//         <>
//         <Table striped bordered hover>
//             <thead>
//                 <tr>
//                 <th>id Customer</th>
//                 <th>Nama Customer</th>
//                 <th>Aksi</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//                    customers.map((customer)=>(
//                     <tr key={customer.id_customer}>
//                     <td>{customer.id_customer}</td>
//                     <td>{customer.name_customer}</td>
//                     <td>
//                     <Button color="white" variant="warning">
//                         Detail
//                     </Button>
//                     </td>
//                     </tr>
//                    ))
//                 }

//             </tbody>
//             </Table>
//     </>
//     );
// }
import React from 'react';
import {Table, Button} from 'react-bootstrap';
import Update from './up_product';

//function "deletePost"
// const deletePost = async (id) => {

//     //sending
//     await axios.delete(`http://localhost:3000//customer/:id`);

//     //panggil function "fetchData"s
//     fectData();
// }

function ListCustomer(props) {
    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id Product</th>
                    <th>Nama Product</th>
                    <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.id_product} 1</td>
                    <td>{props.nama_product} Buku</td>
                    <td>{props.harga} 5000</td>
                    <td>
                        <Update/>
                    <Button variant="danger" size="sm">DELETE</Button>
                    </td>
                    </tr>

                </tbody>
                </Table>
        </>
    );
}

export default ListCustomer