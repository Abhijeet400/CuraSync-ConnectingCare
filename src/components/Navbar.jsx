import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='h-16 bg-blue-600 text-white flex items-center justify-between px-10 text-lg'>
                <a href="/"><h1 className='font-bold text-2xl tracking-widest'>CuraSync</h1></a>
                <ul className='flex justify-center items-center gap-5'>
                    <a href="/"><li>Home</li></a>
                    <a href="#features"><li>Features</li></a>
                    <a href="#aboutus"><li>About us</li></a>
                    <a href="#contactus"><li>Contact us</li></a>
                </ul>
                <div className="signUp">
                    <button className='flex justify-center items-center gap-2 border  rounded-full py-2 px-4 border-white'>
                        <lord-icon
                            src="https://cdn.lordicon.com/bgebyztw.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{"width":25,"height":25}}>
                        </lord-icon>
                        Login/SignUp
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
