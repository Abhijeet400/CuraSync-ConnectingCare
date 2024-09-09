import React from 'react'

const Features = () => {
  return (
    <>
      <section className='min-h-96 mx-4 rounded-lg' id="features">
        <h1 className='text-center text-5xl font-bold text-blue-600 pb-8 pt-4'>Features</h1>
        <section className="cards grid grid-cols-4 gap-6">
            <div className="card bg-gray-100 py-6 px-3 rounded-2xl flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out transform">
                <div className="image">
                    <img src="./assets/images/Feature1.jpg" alt="" className='w-60 h-52 rounded-lg'/>
                </div>
                <div className="content">
                    <p className='text-center text-xl font-bold my-3 text-blue-500'>Real-time Bed Availability</p>
                    <p className='text-center text-lg text-[#36454F]'>Show real-time tracking of hospital beds</p>
                </div>
            </div>
            <div className="card bg-gray-100 rounded-2xl py-6 px-3 flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out transform">
                <div className="image">
                    <img src="./assets/images/Feature2.jpg" alt="" className='w-60 h-52 rounded-lg'/>
                </div>
                <div className="content">
                    <p className='text-center text-xl font-bold my-3 text-blue-500'>OPD Queuing System</p>
                    <p className='text-center text-lg text-[#36454F]'>Queue management for patients in OPDs</p>
                </div>
            </div>
            <div className="card bg-gray-100 rounded-2xl py-6 px-3 flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out transform">
                <div className="image">
                    <img src="./assets/images/Feature3.png" alt="" className='w-60 h-52 rounded-lg'/>
                </div>
                <div className="content">
                    <p className='text-center text-xl font-bold my-3 text-blue-500'>Patient Admission System</p>
                    <p className='text-center text-lg text-[#36454F]'>Efficient management of patient admissions</p>
                </div>
            </div>
            <div className="card bg-gray-100 rounded-2xl py-6 px-3 flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out transform">
                <div className="image">
                    <img src="./assets/images/Feature4.jpg" alt="" className='w-60 h-52 rounded-lg'/>
                </div>
                <div className="content">
                    <p className='text-center text-xl font-bold my-3 text-blue-500'>Inventory Management</p>
                    <p className='text-center text-lg text-[#36454F]'>Manage medicines and consumables efficiently</p>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default Features
