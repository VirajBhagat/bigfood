import React from 'react'
import image1 from "../assets/img/image1.avif";

import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem, IncreaseQty, DecreaseQty } from '../redux/cartSlice';

function CartCard({id, name, price, img, qty}) {
    let dispatch = useDispatch();
    return (
        <div className='w-full h-[100px] p-2 shadow-lg flex justify-between border-1 border-slate-300 rounded-lg'>
            {/* Left Div */}
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img src={img} alt='' className='object-cover'/>
                </div>
                <div className='w-[50%] h-full flex flex-col gap-3'>
                    <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                    <div className='w-[100px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-1 border-green-300 font-semibold'>
                        <button className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center text-xl hover:bg-gray-200 cursor-pointer' onClick={() => {(qty>1) ? dispatch(DecreaseQty(id)): 1}}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{qty}</span>
                        <button className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center text-xl hover:bg-gray-200 cursor-pointer' onClick={() => dispatch(IncreaseQty(id))}>+</button>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-col justify-start items-end gap-6'>
                <span className='text-xl text-green-400 font-semibold'>Rs. {price}/-</span>
                <MdOutlineDelete className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={() => dispatch(RemoveItem(id))} />
            </div>
        </div>
    )
}

export default CartCard