import React from "react";
import Layoutadmin from "./Layoutadmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Sidebar from "../components/Sidebar";
import Search from "../components/search";
import PesananTable from "../components/PesananTable";
import Tombolnext from "../components/Tombolnext";

const Adminlistpesanan = () => {
  return (
    <Layoutadmin>
      <div className="flex mt-8">
      <Sidebar/>
      <div className="ml-6">
          <p className="text-[#464255] text-3xl">Dashboard</p>
          <div className="flex mt-1">
            <div className="w-xl  mx-2 p-4 bg-white border rounded-lg shadow-md">
              {/* Teks di dalam box */}
              <p className="text-sm mb-2 font-semibold text-[#009020]">
                Pelanggan
              </p>

              {/* Box */}
              <div className="bg-[#D9D9D9] w-40  rounded mb-4"></div>

              {/* Dua teks bersebelahan di bawah box */}
              <div className="flex justify-between">
                <p className="text-xl text-black font-bold">12</p>
                <p className="text-sm text-black">Butuh Verifikasi</p>
              </div>
            </div>
            <div className="w-xl mx-2 p-4 bg-white border rounded-lg shadow-md">
              {/* Teks di dalam box */}
              <p className="text-sm mb-2 font-semibold text-[#009020]">
                Pelanggan
              </p>

              {/* Box */}
              <div className="bg-[#D9D9D9] w-40 h-32 rounded mb-4"></div>

              {/* Dua teks bersebelahan di bawah box */}
              <div className="flex justify-between">
                <p className="text-xl text-black font-bold">12</p>
                <p className="text-sm text-black">Butuh Verifikasi</p>
              </div>
            </div>
            <div className="w-xl h-60 mx-2 p-4 bg-white border rounded-lg shadow-md">
              {/* Teks di dalam box */}
              <p className="text-sm mb-2 font-semibold text-[#009020]">
                Pelanggan
              </p>

              {/* Box */}
              <div className="bg-[#D9D9D9] w-40 h-32 rounded mb-4"></div>

              {/* Dua teks bersebelahan di bawah box */}
              <div className="flex justify-between">
                <p className="text-xl text-black font-bold">12</p>
                <p className="text-sm text-black">Butuh Verifikasi</p>
              </div>
            </div>
            <div className="w-xl h-60 mx-2 p-4 bg-white border rounded-lg shadow-md">
              {/* Teks di dalam box */}
              <p className="text-sm mb-2 font-semibold text-[#009020]">
                Pelanggan
              </p>

              {/* Box */}
              <div className="bg-[#D9D9D9] w-40 h-32 rounded mb-4"></div>

              {/* Dua teks bersebelahan di bawah box */}
              <div className="flex justify-between">
                <p className="text-xl text-black font-bold">12</p>
                <p className="text-sm text-black">Butuh Verifikasi</p>
              </div>
            

            
            </div>
           
          </div>
          <div className="my-5">
          <Search/>
          <PesananTable/>
          <div className="d-flex ">
            <p>Menampilkan 1 dari 10 Halaman</p>
            <Tombolnext/>
          </div>
          </div>
          </div>
          

      </div>
    </Layoutadmin>
  );
};

export default Adminlistpesanan;
