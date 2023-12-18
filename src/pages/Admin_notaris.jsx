import React from "react";
import Layoutadmin from "./Layoutadmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Admin_notaris = () => {
  return (
    <Layoutadmin>
<div className="flex mt-8">
        <div className="bg-[#C8BFB8] h-[1100px] w-64 ml-4 rounded-tl-3xl">
           {/* Daftar menu atau navigasi */}
           <ul className="text-white text-[#4C4C4C]">
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer active-menu">
    <a href="./Admindashboard">Dashboard</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer">
    <a href="./Adminlistpesanan">List Pesanan</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer">
    <a href="./Adminpelanggan">Pelanggan</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer">
    <a href="./Adminnotaris">Notaris</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer">
    <a href="./Adminpostblog">Post Blog</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer">
    <a href="./Adminblog">Blog</a>
  </li>
  {/* Tambahkan lebih banyak menu sesuai kebutuhan */}
</ul>
</div> 
      </div>
    </Layoutadmin>
  );
};

export default Admin_notaris;
