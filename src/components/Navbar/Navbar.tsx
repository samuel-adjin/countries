"use client"


import React from 'react'
import {Moon,Sun} from "lucide-react";
import { useTheme } from "next-themes"
import {ModeToggle} from "@/components/Toggle";
const Navbar = () => {
    // const[isDark, setIsDark] = React.useState(false);
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex justify-between items-center py-7 px-3 lg:px-10 shadow-md ">
            <h1 className="font-bold md:text-xl text-md leading-tight">Where in the world?</h1>
            {/*<div className={"flex gap-3 align-middle items-center"}>*/}
            {/*    <Moon className={""} onClick={()=>{setTheme("dark")}}/>*/}
            {/*    <Sun className={""} onClick={()=>{setTheme("dark")}}/>*/}
            {/*    <h2 className={"text-md lg:text-xl"}>Dark mode</h2>*/}
            {/*</div>*/}
            <ModeToggle/>
        </div>
    )
}
export default Navbar
