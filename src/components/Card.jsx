import React from 'react';
import image1 from '../assets/img/image1.avif';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Card({name, image, id, price, type}) {

 let dispatch = useDispatch();

  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 hover:border-2 border-green-300'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
            <img src={image} alt='' className='object-cover' />
        </div>
        <div className='text-2xl font-semibold'>
            {name}
        </div>
        {/* <div> */}
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>
                    Rs {price} /-
                </div>
                <div className='flex justify-center items-center gap-2 text-lg font-semibold text-green-500'>
                    {
                        type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />
                    }
                    <span>
                        {
                            type === 'veg' ? 'Veg' : 'Non Veg'
                        }
                    </span>
                </div>
            </div>
            <button className='w-full p-3 bg-green-400 text-white hover:bg-green-300 transition rounded-lg cursor-pointer font-bold' onClick={() => dispatch(AddItem({id: id, name: name, price: price, img: image, qty: 1}))}>
                Add to dish
            </button>
        {/* </div> */}
    </div>
  )
}

export default Card