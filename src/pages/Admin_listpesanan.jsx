import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "../components/Sidebar";
import PesananTable from "../components/PesananTable";
import Tombolnext from "../components/Tombolnext";

import NavbarallAdmin from "../components/NavbarallAdmin";
import Search from "../components/search";


const Admin_listpesanan = () => {
  return (
    <>
  <NavbarallAdmin />

  <div style={{ display:'flex', justifyContent:'center', paddingTop:"30px"}}>
            <div>
            <Sidebar/>
            </div>
            <div style={{width:"900px"}}>

      <div className="col-md-12">
        <div className="ml-4">
          <h3>List Pesanan Property</h3>

          {/* <div className="row mt-2">
            <div className="col-md-3">
              <div className="h-60 p-4 mx-2 bg-white border rounded-lg shadow-md">
                <p className="text-success font-weight-bold">Pelanggan</p>
                <div className="p-4 bg-light border rounded-lg shadow-md"></div>
                <div className="bg-secondary w-40 h-32 rounded mb-4"></div>
                <div className="d-flex justify-content-between">
                  <p className="fs-1 text-success font-weight-bold mr-2">120</p>
                  <p className="text-sm m-2 text-success">Butuh Verifikasi</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="h-60 p-4 mx-2 bg-white border rounded-lg shadow-md">
                <p className="text-black font-weight-bold">Pelanggan</p>
                <div className="p-4 bg-light border rounded-lg shadow-md"></div>
                <div className="bg-secondary w-40 h-32 rounded mb-4"></div>
                <div className="d-flex justify-content-between">
                  <p className="fs-1 text-black font-weight-bold mr-2">120</p>
                  <p className="text-sm m-2 text-black">Butuh Verifikasi</p>
                </div>
              </div>
            </div>


            <div className="col-md-3">
              <div className="h-60 p-4 mx-2 bg-white border rounded-lg shadow-md">
                <p className="text-black font-weight-bold">Pelanggan</p>
                <div className="p-4 bg-light border rounded-lg shadow-md"></div>
                <div className="bg-secondary w-40 h-32 rounded mb-4"></div>
                <div className="d-flex justify-content-between">
                  <p className="fs-1 text-black font-weight-bold mr-2">120</p>
                  <p className="text-sm m-2 text-black">Butuh Verifikasi</p>
                </div>
              </div>
            </div>


            <div className="col-md-3">
              <div className="h-60 p-4 mx-2 bg-white border rounded-lg shadow-md">
                <p className="text-black font-weight-bold">Pelanggan</p>
                <div className="p-4 bg-light border rounded-lg shadow-md"></div>
                <div className="bg-secondary w-40 h-32 rounded mb-4"></div>
                <div className="d-flex justify-content-between">
                  <p className="fs-1 text-black font-weight-bold mr-2">120</p>
                  <p className="text-sm m-2 text-black">Butuh Verifikasi</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="my-4">
            <Search />
            <PesananTable />
            <div className="d-flex justify-content-between align-items-center">
              <p>Menampilkan 1 dari 10 Halaman</p>
              <Tombolnext />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default Admin_listpesanan;
