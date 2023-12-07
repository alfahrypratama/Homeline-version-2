import React from "react";
import NavbarAll from "../components/NavbarAll";
import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import FooterAll from "../components/FooterAll";

function JualProperti() {
  return (
    <>
      <NavbarAll />
      <Container className="p-3">
        <p>Home - Jual Properti</p>
        <hr />
        <h1 className="text-center my-5 fw-bold" style={{ width: "100%" }}>
          Jual Properti dengan Mudah dan Cepat dengan Homeline
        </h1>
        <Row>
          <Col className="col-8">
            <Card className="p-3 rounded-4 d-flex flex-column gap-3">
              <h3 className="fw-bold">Isi Formulir</h3>
              <form action="">
                <Container className="d-flex gap-3 fw-bold">
                  <div className="border border-3 py-1 px-3 rounded-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Rumah
                      </label>
                    </div>
                  </div>
                  <div className="border border-3 py-1 px-3 rounded-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Tanah
                      </label>
                    </div>
                  </div>
                </Container>
                <Container>
                  <div className="mt-3">
                    <label htmlFor="rumah" className="form-label fw-bold">
                      Masukkan Nama Rumah
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rumah"
                      placeholder="Tuliskan Disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="alamat" className="form-label fw-bold">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alamat"
                      placeholder="Pilih Alamat"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="maps" className="form-label fw-bold">
                      Masukkan Link Gmaps
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="maps"
                      placeholder="Copy disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="sertifikat" className="form-label fw-bold">
                      Jenis Sertifikat
                    </label>
                    <FormSelect id="sertifikat">
                      <option value="shp">SHP</option>
                    </FormSelect>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="luas_lahan" className="form-label fw-bold">
                      Luas Lahan/Tanah
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="luas_lahan"
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="luas_bangunan"
                      className="form-label fw-bold"
                    >
                      Luas Bangunan
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
                      Listrik (Watt)
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
                      Harga per m2
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
                      Deskripsikan Propertimu
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
                <p>Kirim Formulir</p>
                <p>Payment Pelanggan</p>
                <p>Verifikasi Data</p>
                <p>Selesai</p>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterAll />
    </>
  );
}

export default JualProperti;
