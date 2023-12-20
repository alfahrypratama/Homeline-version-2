import React from "react";
import Layoutadmin from "./Layoutadmin";
import Sidebar from "../components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Admin_dashboard = () => {
  return (
    <Layoutadmin>
      <div className="flex mt-8">
        <Sidebar/>
        {/* Teks di sebelah dan 5 box di bawah */}
        <div className="ml-10">
          <p className="text-[#464255] text-3xl">Dashboard</p>
          <div className="flex mt-2">
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

          <div className="mt-10">
            <p className="text-[#464255] text-3xl">Pendapatan</p>
            <div className="max-w-xl mt-8 bg-gray-100 rounded-lg shadow-md">
              {/* Konten utama */}
              <div className="flex items-center justify-between">
                {/* Teks di sisi kiri */}
                <p className="px-4 text-4xl font-semibold text-gray-700 mr-4">
                  RP. 865.000.000
                </p>

                {/* Box di sisi kanan */}
                <div className="bg-[#C8BFB8] w-60 h-20 items-center justify-center rounded-lg">
                  <p className="text-[#3E4954] ">Atur Periode</p>
                  <p className="text-[#3E4954] ">11 Nov 2023 - 1 Des 2023</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Layoutadmin>
  );
};

export default Admin_dashboard;
