<<<<<<< HEAD
import Link from 'next/link';
=======
import React from 'react';
>>>>>>> dd4b15bce620d9767c541a3d17845a5dc6689040

function Kelompok() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Our App
          </h2>
        </div>
        <div className="mt-8 space-y-4">
          <Link href="/login" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </Link>
          <Link href="/register"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
=======
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <p style={{ fontSize: '32px', color: '',padding: '30px' }}>Vercel</p>
      <h1 style={{ color: '',paddingBottom: '5px' }}>Ini anggota kelompok kami</h1>
      <ul style={{ fontSize: '18px', color: 'white', textAlign: 'left', display: 'inline-block' }}>
        <li>Muhammad Raditya Azanata</li>
        <li>Rheznandya Arya Priatama</li>
        <li>Ferdy Permana</li>
        <li>Adam Bekti Laksono</li>
        <li>Dwi Novianto</li>
      </ul>
    </div>
  );
}

export default Kelompok;
>>>>>>> dd4b15bce620d9767c541a3d17845a5dc6689040
