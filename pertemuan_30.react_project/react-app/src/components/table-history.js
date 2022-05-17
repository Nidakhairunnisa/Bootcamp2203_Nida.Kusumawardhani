import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button} from 'react-bootstrap';

function History() {
    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No transaksi</th>
                    <th>Nama Customer</th>
                    <th>Jumlah Barang</th>
                    <th>Total Transaksi</th>
                    <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Susi</td>
                    <td>6</td>
                    <td>24.000</td>
                    <td>
                    <Button color="white" variant="warning">
                        Detail
                    </Button>
                    </td>
                    </tr>
                </tbody>
                </Table>
        </>
    );
}

export default History