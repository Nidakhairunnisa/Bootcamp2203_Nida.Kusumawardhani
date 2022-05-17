import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button, Form} from 'react-bootstrap';


function Transaksi() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [tanggalTransaksi, setTanggalTransaksi] = useState('');
    // const [namaAdmin, setNamaAdmin] = useState('');
    // const [namaCustomer, setNamaCustomer] = useState('');
    // const [namaBarang, setNamaBarang] = useState('');
    // const [jumlahBarang, setJumlahBarang] = useState('');
    // const [hargaSatuan, setHargaSattuan] = useState(''); 
    // const [totalTransaksi, setTotalTransaksi] = useState('');
  
    return (
        <>
        <Button className="modal-button" variant="success" onClick={handleShow}>
          Transaksi
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Transaksi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="create-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tanggal Transaksi</Form.Label>
                <Form.Control
                  type="Date"
                  placeholder=""
                  // onChange={(e) => setTanggalTransaksi(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Admin</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Nama Admin"
                  // onChange={(e) => setNamaAdmin(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Customer</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Nama Customer"
                  // onChange={(e) => setNamaCustomer(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Barang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Barang"
                  // onChange={(e) => setNamaBarang(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Jumlah Barang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jumlah Barang"
                  // onChange={(e) => setJumlahBarang(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Harga Satuan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Harga"
                  // onChange={(e) => setHargaSattuan(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Total Transaksi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Total"
                  // onChange={(e) => setTotalTransaksi(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Transaksi