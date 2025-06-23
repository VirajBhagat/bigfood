import React from 'react'
import image1 from "../assets/img/image1.avif";

import { MdOutlineDelete } from "react-icons/md";

function CartCard() {
  return (
    <div className='w-full h-[100px] p-2 shadow-lg flex justify-between'>
        {/* Left Div */}
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image1} alt='' className='object-cover'/>
            </div>
            <div className='w-[50%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
                <div className='w-[100px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-1 border-green-300 font-semibold'>
                    <button className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center text-xl hover:bg-gray-200 cursor-pointer'>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>1</span>
                    <button className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center text-xl hover:bg-gray-200 cursor-pointer'>+</button>
                </div>
            </div>
        </div>

        {/* Right */}
        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-xl text-green-400 font-semibold'>Rs. 499/-</span>
            <MdOutlineDelete className='w-[30px] h-[30px] text-red-400' />
        </div>
    </div>
  )
}

export default CartCard