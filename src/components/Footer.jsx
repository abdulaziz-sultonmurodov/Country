import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { countries } from "../data/countryInfo"
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <footer className="flex flex-col text-gray-500 my-4">
            <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-10 py-5">
                <a href="https://rs.school/js/">
                <img className="w-48 cursor-pointer" src="https://rs.school/images/rs_school_js.svg" alt="Logo" />
                </a>
                <ul className="flex flex-col lg:flex-row my-4 lg:my-0">
                    {countries.map(country => (

                <li key={country.id} className="hover:text-gray-800 cursor-pointer my-2 mx-4"><Link to={`/country/${country.id}`}>{country.capital}</Link></li>
                    ))}
              </ul>
                <div className="mx-auto lg:mx-0"><a className="flex hover:text-gray-800 items-center" href="https://github.com/abdulaziz-sultonmurodov" target="_blank" rel="noreferrer">Github <IoLogoGithub className="h-6 w-6 ml-2" /> </a></div>
            </nav>
            <p className="text-center text-black font-semibold text-lg">&copy; 2021. All rights reserved.</p>
        </footer>
    )
}

export default Footer
