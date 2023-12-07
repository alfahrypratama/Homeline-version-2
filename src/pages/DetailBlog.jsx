import React from 'react'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarAll from '../components/NavbarAll';
import CardAbout from '../components/CardAbout';
import CardHouse from '../components/CardHouse';
import FooterAll from '../components/FooterAll';


export default function DetailBlog() {
    return (
        <>
            {/* Mintaa gantiin navbar -> jadi navbarUser yaa bang */}
            <NavbarAll />
            <br />
            <div style={{ padding: "0 80px 0 80px" }}>
                Home-Blog <hr />
            </div><br /><br />
            <div style={{ textAlign: "center" }}>
                <h3>Tips Mencari Rumah yang Nyaman</h3>
            </div>
            <div className='d-flex justify-content-around '>
                <div>
                    Admin
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    10 min read | 3 Maret 2023
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src='/images/picture.png' />
            </div>
            <div style={{ padding: "0 80px 0 80px" }}>
                Mencari rumah yang nyaman melibatkan beberapa pertimbangan penting agar Anda dapat menemukan tempat yang sesuai dengan kebutuhan dan preferensi Anda. Berikut adalah beberapa tips untuk mencari rumah yang nyaman: <br />
                1. Buat Daftar Prioritas:
                Tentukan kriteria utama yang Anda inginkan dalam sebuah rumah. Apakah itu lokasi, ukuran, jumlah kamar, fasilitas, atau hal-hal lainnya. Menetapkan prioritas akan membantu Anda menyaring pilihan dengan lebih efektif. <br />
                2. Tentukan Lokasi yang Diinginkan:
                Pilih lokasi yang sesuai dengan kebutuhan Anda, seperti dekat dengan tempat kerja, sekolah, pusat perbelanjaan, atau fasilitas umum lainnya. Pertimbangkan juga faktor keamanan dan kenyamanan lingkungan sekitar. <br />
                3. Anggaran yang Realistis
                Tentukan anggaran yang realistis sesuai dengan kemampuan keuangan Anda. Ini tidak hanya mencakup harga pembelian rumah, tetapi juga biaya-biaya terkait seperti pajak properti, asuransi, dan biaya pemeliharaan. <br />
                4. Kondisi Bangunan:
                Perhatikan kondisi fisik rumah. Jika memungkinkan, lakukan inspeksi untuk memastikan bahwa rumah tersebut dalam kondisi baik dan tidak memerlukan renovasi besar. Ini dapat mencegah masalah di masa depan. <br />
                5. Fasilitas dan Fitur:
                Tentukan fitur dan fasilitas yang penting bagi Anda. Apakah Anda menginginkan taman, garasi, dapur yang luas, atau ruang kerja? Pilih rumah yang memiliki fitur sesuai dengan kebutuhan dan gaya hidup Anda. <br />
                6. Transportasi dan Aksesibilitas:
                Pertimbangkan aksesibilitas ke transportasi umum, jalan raya, dan fasilitas penting lainnya. Ini dapat memengaruhi kenyamanan Anda dalam mobilitas sehari-hari. <br />
            </div> <br /><br /><br />

            <Nav className='exp-section-2'>
                <Container className='d-flex flex-column text-center align-items-center justify-content-center'>
                    <Nav className='fs-2 fw-bold'>Pilih Rumah Ternyamanmu</Nav>
                    <Nav className='mt-3'>Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.</Nav>
                    <Button variant="outline-light" className='mt-3 ps-4 pt-2 pe-4 pb-2 rounded-5'>Hubungi Kami</Button>
                </Container>
            </Nav>
            <FooterAll />
        </>

    );
}