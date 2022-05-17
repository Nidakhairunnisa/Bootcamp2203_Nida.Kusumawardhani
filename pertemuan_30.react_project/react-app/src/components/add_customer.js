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
            <Modal.Title>Add Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="create-form">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Customer</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Nama Customer"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="mobile"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="email"
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