import React from 'react';

import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';

function Verifpelanggan() {
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
              <h3 className="fw-bold">Verifikasi</h3>
              <form action="">
                  <div className="mt-3">
                    <label htmlFor="nama" className="form-label fw-bold">
                      Nama Rumah 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="Domisili" className="form-label fw-bold">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Domisili "
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="no" className="form-label fw-bold">
                      Masukkan Link G-Maps 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="no"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="nama" className="form-label fw-bold">
                    Jenis Sertifikat
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="angka" className="form-label fw-bold">
                      Luas Lahan/Tanah
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="angka"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="angka" className="form-label fw-bold">
                      Luas Bangunan 
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="angka"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="angka" className="form-label fw-bold">
                      Listrik (Watt)
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="angka"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="angka" className="form-label fw-bold">
                      Harga per m2
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="angka"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="nama" className="form-label fw-bold">
                      Deskripsi Propertimu 
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="nama"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="angka" className="form-label fw-bold">
                      Foto 
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="angka"
                      placeholder=""
                    />
                  </div>

  
                   <div className="d-flex justify-content-end">
  <button
    type="submit"
    className="mx-3 px-3 py-2 my-5 text-light text-center fw-bold"
    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px"}}
  >
    Tidak setujui 
  </button>
  <button
    type="submit"
    className="mx-3 px-3 py-2 my-5 text-light text-center fw-bold"
    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px"}}
  >
   

      Setujui 
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
export default Verifpelanggan;