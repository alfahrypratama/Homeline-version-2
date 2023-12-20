import React from 'react';
import { Link } from 'react-router-dom';

const VerificationBox = () => {
  return (
    <div className="border bg-white p-3 mb-3 ml- mt-12 " style={{ width: '30%' }}>
      <div className='col-md-6 offset-md-3 text-center'>
        <b className='text-center'>Perlu Verifikasi</b></div>
      <div className="d-flex justify-content-between">
        <div>
          <p>Teks Pertama</p>
        </div>
        <div>
          <Link to={'/Verifnotaris'}>
          Detail
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <div className="d-flex justify-content-between">
        <div>
          <p>Teks Pertama</p>
        </div>
        <div>
          <Link to={'/Verifnotaris'}>
          Detail
          </Link>
        </div>
      </div>

      <hr className="my-2" />
    </div>
    
  );
};

export default VerificationBox;
