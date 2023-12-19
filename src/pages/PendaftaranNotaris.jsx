import React from "react";
import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import FooterAll from "../components/FooterAll";
import NavbarAll from "../components/NavbarAll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function PendaftaranNotaris() {
    return (
    <>
      <NavbarAll />
      <Container className="p-3">
        <p>Home - Daftar Notaris</p>
        <hr />
        <h1 className="text-center my-5 fw-bold" style={{ width: "100%" }}>
        Daftar Sekarang dan Jangkau 
          Lebih Banyak Klien!
        </h1>
        <Row>
          <Col className="col-8">
            <Card className="p-3 rounded-4 d-flex flex-column gap-3">
              <h3 className="fw-bold">Isi Formulir</h3>
              <form action="">
                
                <Container>
                  <div className="mt-3">
                    <label htmlFor="rumah" className="form-label fw-bold">
                      Nama Lengkap 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rumah"
                      placeholder="Tuliskan Disini"
                    />
                  <div className="mt-3">
                    <label htmlFor="alamat" className="form-label fw-bold">
                      Domisili 
                    </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="alamat"
                      placeholder="Pilih Alamat"
                    />
                  </div>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="luas_bangunan"
                      className="form-label fw-bold"
                    >
                      No telepon 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="luas_bangunan"
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="listrik" className="form-label fw-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="listrik"
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="harga" className="form-label fw-bold">
                      Portofolio 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="harga"
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="deskripsi" className="form-label fw-bold">
                      Deskripsikan Dirimu 
                    </label>
                    <textarea
                      className="form-control"
                      id="deskripsi"
                      placeholder="Tuliskan detailnya disini"
                    ></textarea>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="file" className="form-label fw-bold">
                      Tambah Foto
                    </label>
                    <input className="form-control" type="file" id="file" />
                  </div>
                </Container>
                <Container className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="mx-3 px-3 py-2 my-5 text-light text-center rounded-2 fw-bold"
                    style={{ backgroundColor: "#5B4533" }}
                  >
                    Kirim
                  </button>
                </Container>
              </form>
            </Card>
          </Col>
          <Col className="col-4">
  <Card className="p-3 rounded-4 d-flex flex-column gap-3">
    <div
      className="mx-3 px-3 py-2 mb-3 text-light text-center rounded-5 fw-bold"
      style={{ backgroundColor: "#5B4533" }}
    >
      Pantau Pendaftaran
    </div>
    <Container className="d-flex flex-column gap-3 align-items-center fw-bold">
      <p>
        <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
        Kirim Formulir
      </p>
       <p>
        <FontAwesomeIcon icon={faUserCheck} className="me-2" />
        Verifikasi Data
      </p>
       <p>
        <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
        Selesai
      </p>
    </Container>
  </Card>
</Col>
        </Row>
      </Container>
      <br />
      <FooterAll/>
    </>
      
    

    ); 
}
export default PendaftaranNotaris;
      