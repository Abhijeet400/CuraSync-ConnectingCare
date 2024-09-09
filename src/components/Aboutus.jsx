import React from 'react'

const Aboutus = () => {
    return (
        <section className='text-[#36454F]' id="aboutus">
            <h1 className='text-center text-5xl font-bold text-blue-600 pb-8 pt-4'>About Us</h1>
            <div className='flex items-center justify-center mx-4 gap-10'>
                <div className="content w-[70%] bg-gray-100 px-4 py-2 rounded-2xl">
                    <p className='text-center font-semibold text-3xl py-3 text-blue-500'>Our Mission</p>
                    <p>At [Your Organization's Name], we strive to enhance healthcare delivery through cutting-edge technological solutions Our mission is to support the Government of NCT of Delhi in optimizing hospital operations, patient management, and inventory control.</p>
                    <p className='text-center font-semibold text-3xl py-3 text-blue-500'>Our Focus</p>
                    <p>We are developing a comprehensive system to address key challenges in hospital management, including OPD queuing, bed availability, patient admissions, and inventory management for medicines and consumables Our solution aims to integrate seamlessly with existing city-wide modules, improving overall efficiency and patient care.</p>
                    <p className='text-center font-semibold text-3xl py-3 text-blue-500'>Our Approach</p>
                    <p>Our team is dedicated to creating a reliable and adaptable solution that not only meets the current needs of the IT Department, GNCTD but also supports future advancements By collaborating closely with NIC and other stakeholders, we ensure our solution is both innovative and effective.</p>
                    <p className='text-center font-semibold text-3xl py-3 text-blue-500'>Our Commitment</p>
                    <p>We are committed to delivering technology that transforms hospital management and enhances patient experiences Our focus is on innovation, efficiency, and long-term value, contributing to the betterment of healthcare services in Delhi.</p>
                </div>
                <div className="images">
                    <a href="https://delhi.gov.in/"><img src="./assets/images/DelhiGov.png" alt="jhh" width={250} /></a>
                </div>
            </div>
        </section>
    )
}

export default Aboutus
