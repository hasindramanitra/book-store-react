import React from 'react'
import Logo from "../assets/website/logo.png"
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services",
    },
];

const DropdownLinks = [
    {
        id: 4,
        name: "Trending Books",
        link: "/#",
    },
    {
        id: 5,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 6,
        name: "Authors",
        link: "/#",
    },
];

export default function Navbar() {
    return (
        <div className='shadow-lg bg-white dark:bg-gray-900 dark:text-white duratioin-200'>
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={Logo} alt="" className='w-10' />
                            Books
                        </a>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div>
                            <DarkMode/>
                        </div>
                        <ul className='gap-4 items-center hidden sm:flex'>
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link} className='inline-block py-4 px-4 hover:text-primary duration-200'>
                                            {menu.name}
                                        </a>
                                    </li>
                                ))
                            }
                            {/* dropdown menu */}
                            <li className="group relative cursor-pointer">
                                <a href="/#" className='flex h-[72px] items-center gap-[2px]'>
                                    Quick Links
                                    <span>
                                        <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
                                    </span>
                                </a>
                                {/* dropdow link section */}
                                <div className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white dark:bg-gray-900 dark:text-white shadow-md w-[150px] p-2'>
                                    <ul>
                                        {
                                            DropdownLinks.map((link) => (
                                                <li className='inline-block w-full rounded-md p-2 hover:bg-primary/20 ' key={link.id}>
                                                    <a href={link.link}>
                                                        {link.name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>Order <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
