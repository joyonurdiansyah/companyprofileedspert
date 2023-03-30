import React from "react"
import { Navbar } from 'flowbite-react';

const Navigation = () => {
    return (
        <Navbar
            fluid={true}
            rounded={false}
            className="background-color-header"
        >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">LOGO</span>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <ul className="items-center justify-between flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 background-color-header">
                        <li>
                            <span className="text-white">Program</span>
                        </li>
                        <li >
                            <span className="text-white">Bidang Ilmu</span>
                        </li>
                        <li>
                            <span className="text-white">Tentang Edspert</span>
                        </li>
                        <li>
                            <button type="button" className="items-center justify-between text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center" style={{backgroundColor:'#FF6161'}}>Masuk/Daftar</button>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navigation