"use client"


import React from 'react'
import {ModeToggle} from "@/components/Toggle";
const Navbar = () => {

    return (
        <div className="flex justify-between items-center py-7 px-3 lg:px-10 shadow-md ">
            <h1 className="font-bold md:text-xl text-md leading-tight">Where in the world?</h1>
            <ModeToggle/>
        </div>
    )
}
export default Navbar
