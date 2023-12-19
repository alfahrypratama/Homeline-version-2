import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarallAdmin from "../components/NavbarallAdmin";
import Sidebar from "../components/Sidebar";
import PesananTable from "../components/PesananTable";
import Tombolnext from "../components/Tombolnext";
import Search from "../components/search";

const Listpesananterjual = () => {
  return (
    <>
        <NavbarallAdmin/>

        <div style={{  justifyContent:'center', paddingTop:"30px"}}>
            <div>
            <Sidebar/>
            </div>
            <div style={{width:"900px"}}>
        <div style={{ marginLeft: "20px", width: "900px" }}>
          <h2>List Pesanan Property</h2>
          <div className="mt-5 ml-3 mr-3 overflow-auto">
          <div className="w-163px mx-2 p-4 bg-white border rounded-lg border-[2px] border-[#D9D9D9] shadow-md" style={{ width: '163px' }}>
    <p className="text-sm mb-2 font-semibold text-[#009020]">
      Pelanggan
    </p>
    <div className="bg-[#D9D9D9] w-full h-32 rounded mb-4"></div>
    <div className="flex justify-center">
      <p className="text-xl text-black font-bold">12</p>
      <p className="text-sm text-black">Butuh Verifikasi</p>
    </div>
  </div>
</div>

<div className="mt-5 ml-3 mr-3 overflow-auto">
          <div className="w-163px mx-2 p-4 bg-white border rounded-lg border-[2px] border-[#D9D9D9] shadow-md" style={{ width: '163px' }}>
    <p className="text-sm mb-2 font-semibold text-[#009020]">
      Pelanggan
    </p>
    <div className="bg-[#D9D9D9] w-full h-32 rounded mb-4"></div>
    <div className="flex justify-center">
      <p className="text-xl text-black font-bold">12</p>
      <p className="text-sm text-black">Butuh Verifikasi</p>
    </div>
  </div>
</div>






        </div>
      </div>       
      
      <div className="my-5">
        <Search />
        <PesananTable />
        <div className="d-flex ">
          <p>Menampilkan 1 dari 10 Halaman</p>
          <Tombolnext />
        </div>
      </div>
      </div>
    </>
  );
}

export default Listpesananterjual;