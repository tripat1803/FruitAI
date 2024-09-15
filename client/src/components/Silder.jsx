import React, { useState } from 'react'
import { MdOutlineCoPresent } from 'react-icons/md';
import { PiProjectorScreenLight } from "react-icons/pi";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { GoPackage } from "react-icons/go";

import { useNavigate } from "react-router-dom";



const Silder = ({ children }) => {
    const navigate = useNavigate();

    const [page,setPage]=useState("Product");
    // console.log(children.path);
    return (
        <div>
            <div className='mt-14 fixed w-[15%] h-[100vh] flex gap-[10rem] items-center flex-col '>

                <div className='w-[80%] mt-8 cursor-pointer'>
                    <div onClick={() => { navigate('/');setPage("Product") }} className={`w-full ${page==="Product" ? "bg-black text-white font-medium":""} rounded-md py-2 border-b-rose-50 border-b-[0.8px] flex justify-center items-center text-[1.1rem] gap-3`}>
                        <PiProjectorScreenLight /><h1 className='self-end'>Products</h1>
                    </div>
                    <div onClick={() => { navigate('/statistics');setPage("Stats") }} className={`w-full ${page==="Stats" ? "bg-black text-white font-medium":""} rounded-md py-2 border-b-rose-50 border-b-[0.8px] flex justify-center items-center text-[1.1rem] gap-3`}>
                        <PiCurrencyCircleDollarLight /><h1 className=''>Statistics</h1>
                    </div>
                    <div onClick={() => { navigate('/stock');setPage("Stock") }} className={`w-full ${page==="Stock" ? "bg-black text-white font-medium":""} rounded-md py-2 border-b-rose-50 border-b-[0.8px] flex justify-center items-center text-[1.1rem] gap-3`}>
                        <GoPackage /><h1 className=''>Product Stock</h1>
                    </div>
                    

                </div>
            </div>
            <main className='h-full  ml-[15.5%] py-[6rem] px-10 bg-[#F5F6FA] '>
                {children}
            </main>
        </div>
    )
}

export default Silder