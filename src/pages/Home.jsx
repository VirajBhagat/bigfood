import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../components/Category'
import Card from '../components/Card'
import { food_items } from '../server_manager/food'
import { dataContext } from '../context/UserContext'

function Home() {
  let {category, setCategory, input} = useContext(dataContext)
  const [search, setSearch] = useState(food_items);

  const categoryFoodFilter = (categoryType) => {
    if(categoryType === 'All'){
      setCategory(food_items);
    }else{
      console.log(food_items.filter((item) => (item.food_category === categoryType)));
      
      setCategory(food_items.filter((item) => (item.food_category === categoryType)));
    }
  }

  const categorySearchFilter = (search) => {
    if(categoryType === 'All'){
      setCategory(food_items);
    }else{
      console.log(food_items.filter((item) => (item.food_category === categoryType)));
      
      setCategory(food_items.filter((item) => (item.food_category === categoryType)));
    }
  }

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {
          Categories.map((category, idx) => {
            return (
              <div className='w-[130px] h-[130px] bg-white flex flex-col items-center justify-center gap-3 p-4 text-[16px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-300'
              onClick={() => categoryFoodFilter(category.name)}>
                {category.icon}
                {category.name}
              </div>
            )
          })
        }
      </div>
      <div className='w-full flex flex-wrap justify-center items-center gap-5 px-5 pt-8 pb-8'>
        {
          category.map((item) => (
              <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          ))
        }
      </div>
    </div>
  )
}

export default Home