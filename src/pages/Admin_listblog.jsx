import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';


function Admin_listblog() {
  return (
    <>
      <NavbarallAdmin/>
    <div style={{ display:'flex', justifyContent:'center', paddingTop:"50px"}}>
        <div>
            <Sidebar/>
        </div>
        <br />
        <div style={{width:"900px"}}>
        <Link to={'/Admintambahblog'}>
        <button
                    className="mx-0 px-1 py-2  text-light text-center fw-bold"
                    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px", marginBottom:"20px"}}
                  >
                    Tambah Blog
        </button>
        </Link>
        <div className="card">
            <div className="card-body">
                <div className='d-flex gap-4'>
                    <div>
                        <img src="/img_data/blog1.png" alt="pic blog" />
                    </div>
                    <div className='d-flex' style={{gap:"160px"}}>
                    <div>
                        <h4>Tips cari RUmah Dengan Nyaman</h4>
                        <span style={{color:"grey"}}>dipublikasikan 14 November 2023</span>
                    </div>
                    <div class="d-grid gap-1 d-md-flex justify-content-md-end " style={{height:"40px", alignContent:"center"}}>
                      <Link to={'/Admineditblog'}><button class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button></Link>
                      <button class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         
        </div>
      <br />
      <br />

      </div>
    </>

  );
}
export default Admin_listblog;
