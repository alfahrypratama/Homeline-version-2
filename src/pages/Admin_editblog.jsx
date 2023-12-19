import React from 'react';
import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Sidebar from '../components/Sidebar';
import NavbarallAdmin from '../components/NavbarallAdmin';



function Admin_editblog () {
    return (
        <>
       <NavbarallAdmin/>

    <div style={{ display:'flex', justifyContent:'center', paddingTop:"30px"}}>
    <div>
    <Sidebar/>
    </div>
    <div style={{width:"900px"}}>
  <Col className="col-12">
    <Card className="p-3 d-flex flex-column gap-3">
      <h3 className="fw-bold">Edit Blog</h3>
      <form action="">
          <div className="mt-3">
            <label htmlFor="nama" className="form-label fw-bold">
              Judul 
            </label>
            <input
              type="text"
              className="form-control"
              id="nama"
              placeholder=""
            />
          </div>
          <div className="mt-3">
          <label htmlFor="file" className="form-label fw-bold">
            Tambah Foto
           </label>
           <input className="form-control" type="file" id="file" />
            </div>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
          < Form.Label className='fw-bold pt-3'>Isi Blog</Form.Label>
<         Form.Control as="textarea" rows={8} placeholder=""/>
         </Form.Group>
         {/* <div className="mt-3">
         <label htmlFor="jenisBlog" className="form-label fw-bold">
          Jenis Blog
         </label>
          <select
          className="form-select"
          id="jenisBlog"
          aria-label="Jenis Blog"
          >
          <option selected>Pilih Jenis</option>
          <option value="teknologi">Teknologi</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
          {/* Tambahkan opsi-opsi lain sesuai kebutuhan Anda 
          </select> 
          </div> */}
         
          <div className="d-flex justify-content-end">
          <button
            type="button"
            className="mx-3 px-3 py-2 my-3 text-light text-center fw-bold"
            style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px"}}
          >
            Simpan perubahan
          </button>
        </div>
      </form>
    </Card>
  </Col>
    </div>

  </div>
  

        </>
    );
}
export default Admin_editblog;
