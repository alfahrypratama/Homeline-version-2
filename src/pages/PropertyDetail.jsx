import React from "react";
import { Button, Card, Col, Container, Image, Nav, Row } from "react-bootstrap";
import NavbarAll from "../components/NavbarAll";
import FooterAll from "../components/FooterAll";
function PropertyDetail() {
  return (
    <>
      <NavbarAll />
      <Container className="p-3 container-lg">
        <Row className="justify-content-between">
          <Col className="col-4">
            <h3>Rumah Minimalis PIK</h3>
          </Col>
          <Col className="col-4">
            <div className="d-flex justify-content-between">
              <p>Tambahkan ke favorit</p>
              <p>Bagikan</p>
            </div>
          </Col>
        </Row>
        <Container className="my-5">
          <Row>
            <Col className="col-6">
              <Image
                src="/images/ex3.png"
                style={{ width: "100%" }}
                alt="landing"
              />
            </Col>
            <Col className="col-6">
              <Row>
                <Col className="col-6">
                  <Image
                    src="/images/pic3.png"
                    className="img-fluid"
                    alt="landing"
                  />
                </Col>
                <Col className="col-6">
                  <Image
                    src="/images/pic11.png"
                    className="img-fluid"
                    alt="landing"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-6">
                  <Image
                    src="/images/pic11.png"
                    className="img-fluid"
                    alt="landing"
                  />
                </Col>
                <Col className="col-6">
                  <Image
                    src="/images/ex3.png"
                    className="img-fluid"
                    alt="landing"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-between">
          <Col className="col-8">
            <p>
              <b>5</b> kamar tidur | <b>3</b> kamar mandi | <b>200</b> m2
            </p>
            <p>
              Deskripsi: Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
            <p>Keterangan:</p>
            <Row>
              <Col>
                <p className="m-0 text-secondary">Tipe Properti</p>
                <p>Rumah Dijual</p>
                <p className="m-0 text-secondary">Luas Tanah</p>
                <p>250 m2</p>
                <p className="m-0 text-secondary">Harga per m2</p>
                <p>Rp 10.000.000</p>
                <p className="m-0 text-secondary">Listrik</p>
                <p>2200 watt</p>
              </Col>
              <Col>
                <p className="m-0 text-secondary">Luas Bangunan</p>
                <p>200 m2</p>
                <p className="m-0 text-secondary">Interior</p>
                <p>Full</p>
                <p className="m-0 text-secondary">Sertifikat</p>
                <p>SHM</p>
                <p className="m-0 text-secondary">Terdaftar Pada</p>
                <p>12/11/2023</p>
              </Col>
            </Row>
          </Col>
          <Col className="col-4">
            <div
              className="mx-3 px-3 py-2 mb-5 text-light text-center rounded-2 fw-bold"
              style={{ backgroundColor: "#5B4533" }}
            >
              Lihat 3D
            </div>
            <Card className="p-3 rounded-4 text-center d-flex flex-column gap-3">
              <b>Anda berminat?</b>
              <div
                className="px-3 py-1 text-light rounded-2 fw-bold"
                style={{ backgroundColor: "#5B4533" }}
              >
                Hubungi
              </div>
              <div
                className="px-3 py-1 text-light rounded-2 fw-bold"
                style={{ backgroundColor: "#5B4533" }}
              >
                Kirim Pesan
              </div>
              <p className="mt-3 text-secondary">Butuh bantuan?</p>
            </Card>
          </Col>
        </Row>
        <Container className="my-5 d-flex justify-content-center flex-column">
          <h4>Lokasi</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.4241735224235!2d112.77756659547899!3d-7.3185861285780165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1701753499408!5m2!1sid!2sid"
            width={1200}
            height={600}
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </Container>
      <Nav className="exp-section-2">
        <Container className="d-flex flex-column text-center align-items-center justify-content-center">
          <Nav className="fs-2 fw-bold">Pilih Rumah Ternyamanmu</Nav>
          <Nav className="mt-3">
            Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.
          </Nav>
          <Button
            variant="outline-light"
            className="mt-3 ps-4 pt-2 pe-4 pb-2 rounded-5"
          >
            Hubungi Kami
          </Button>
        </Container>
      </Nav>
      <FooterAll />
    </>
  );
}

export default PropertyDetail;
