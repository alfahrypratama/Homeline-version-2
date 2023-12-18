import React from 'react'

import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import Navbarall_Admin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';
import NavbarallAdmin from '../components/NavbarallAdmin';

function Admin_lihatpelanggan() {
    return (
        <>
        <NavbarallAdmin/>

        <div style={{ display:'flex', justifyContent:'center', paddingTop:"80px"}}>
            <div>
            <Sidebar/>
            </div>
            <div style={{width:"900px"}}>
          <Col className="col-12">
            <Card className="p-3 d-flex flex-column gap-3">
              <h3 className="fw-bold">Data pelanggan</h3>
              <form action="">
                  <div className="mt-3">
                    <label htmlFor="nama" className="form-label fw-bold">
                      Id Akun Pelanggan 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="Syalala"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Nama Pelanggan 
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="syalala@gmail.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="no" className="form-label fw-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="no"
                      placeholder="0293192090228"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="domisili" className="form-label fw-bold">
                    Nomor Telepon
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="domisili"
                      placeholder="Surabaya"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="bio" className="form-label fw-bold">
                      Jenis Pelanggan 
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="bio"
                      placeholder="Tuliskan disini"
                    />
                  </div>
  
                  <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="mx-3 px-3 py-2 my-5 text-light text-center fw-bold"
                    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px"}}
                  >
                    Selesai 
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
export default Admin_lihatpelanggan;