import React, { useEffect, useState } from 'react'
import DarkPng from "../assets/website/dark-mode-button.png"
import LightPng from "../assets/website/light-mode-button.png"

export default function DarkMode() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])
    return (
        <>
            <div className='relative'>
                <img src={LightPng} alt="" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
                <img src={DarkPng} alt="" onClick={() =>
                    setTheme((data) => (data === "dark" ? "light" : "dark"))
                }
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 " />
            </div>
        </>
    )
}
