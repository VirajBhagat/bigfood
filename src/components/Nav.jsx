import React, { useContext, useEffect } from 'react'

// React icons
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { dataContext } from '../context/UserContext';
import { food_items } from '../server_manager/food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input, setInput, category, setCategory, showCart, setShowCart} = useContext(dataContext);
  
  useEffect(()=> {
    let newFoodList = food_items.filter((item) => (item.food_name.toLowerCase().includes(input) || item.food_name.includes(input)))
    setCategory(newFoodList)
  }, [input]);

  let items = useSelector(state => state);
  console.log(items);
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        {/* Logo */}
        <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl'>
            <MdFastfood className='w-[30px] h-[30px] text-green-300' />
        </div>

        {/* Search Form */}
        <form className='w-[50%] md:w-[70%] h-[60px] bg-white rounded-md flex items-center px-5 gap-5 shadow-md' onSubmit={(e) => e.preventDefault()}>
            <FaSearch className='text-green-300 w-[20px] h-[20px] rounded-md'/>
            <input type='text' className='w-[100%] outline-none text-[13px] md:text-[16px]' placeholder='Search Items...'
            onChange={(e) => setInput(e.target.value)} value={input}/>
        </form>

        <div className='w-[60px] h-[60px] bg-white cursor-pointer flex justify-center items-center rounded-md shadow-xl relative' onClick={() => {
          setShowCart(true)
        }}>
            <span className='absolute top-1.5 right-4'>{items.cart.length}</span>
            <HiOutlineShoppingBag className='w-[20px] h-[20px] text-green-500' />
        </div>
    </div>
  )
}

export default Nav