import React from 'react';
import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import Sidebar from '../components/Sidebar';
import Navbarall_Admin from '../components/NavbarallAdmin';
import NavbarallAdmin from '../components/NavbarallAdmin';

function NotarisAdmin() {
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
              <h3 className="fw-bold">Notaris</h3>
              <form action="">
                <div >
                    <img src="\public\image\notaris.png" alt="" style={{width: "400px"}}/>
                </div>
                  <div className="mt-3">
                    <label htmlFor="nama" className="form-label fw-bold">
                      Nama Notaris
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
                      Email
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
                      Nomor Telepon
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
                      Domisili
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
                      Bio
                    </label>
                    <input
                      type="text-area"
                      className="form-control"
                      id="bio"
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="linkedin"
                      className="form-label fw-bold"
                    >
                      Link Linkedin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="linkedin"
                      placeholder="Linkedin.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="linkedin"
                      className="form-label fw-bold"
                    >
                      Link Portofolio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="porto"
                      placeholder="portofolio.com"
                    />
                  </div>
                  
                  <div className="mt-3">
                    <label htmlFor="file" className="form-label fw-bold">
                      Dokumen Tambahan
                    </label>
                    <input className="form-control" type="file" id="file" />
                  </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="mx-3 px-3 py-2 my-5 text-light text-center fw-bold"
                    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px"}}
                  >
                    UPDATE
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
export default NotarisAdmin;