import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';
import Search from '../components/search';



function Admin_listpelanggan() {
  return (
    <>
      <NavbarallAdmin/>
    <div style={{ display:'flex', justifyContent:'center', paddingTop:"50px"}}>
        <div>
            <Sidebar/>
        </div>
        <br />
        <div style={{width:"900px"}}>
       <h3>Status Pelanggan</h3>
       <Search/> <br />
       <table class="table">
  <thead>
    <tr style={{textAlign:"center"}}>
      <th scope="col">Nama</th>
      <th scope="col" >Paket Pelanggan</th>
      <th scope="col">Status</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Syalala</td>
      <td style={{textAlign:"center"}}>6 Bulan</td>
      <td style={{color:"green", textAlign:"center"}}>Aktif</td>
      <td>
            <div class="d-grid gap-1 d-md-flex justify-content-center " style={{height:"40px", alignContent:"center"}}>
                      <button class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button>
                      <button class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
            </div>
      </td>
      
    </tr>
    <tr>
      <td scope="row">Intan</td>
      <td style={{textAlign:"center"}}>6 Bulan</td>
      <td style={{color:"red", textAlign:"center"}}>Kadaluarsa</td>
      <td>
            <div class="d-grid gap-1 d-md-flex justify-content-center " style={{height:"40px", alignContent:"center"}}>
                      <button class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button>
                      <button class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
            </div>
      </td>
    </tr>
  </tbody>
</table>
         
        </div>
      <br />
      <br />

      </div>
    </>

  );
}
export default Admin_listpelanggan;
