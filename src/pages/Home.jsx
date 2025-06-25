import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { food_items } from "../server_manager/food";
import { dataContext } from "../context/UserContext";
import { GiCancel } from "react-icons/gi";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import emptyCartImg from "../assets/img/empty_cart.webp";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { RemoveAllOrder } from "../redux/cartSlice";

function Home() {
  let dispatch = useDispatch();
  let items = useSelector((state) => state.cart);

  let { category, setCategory, foodCategories, setFoodCategories, input, showCart, setShowCart } = useContext(dataContext);
  const [search, setSearch] = useState(food_items);

  const categoryFoodFilter = (categoryType, categoryId) => {
    // To set activeness for our filter food category
    setFoodCategories(foodCategories.map((category) => (category.id == categoryId ? {...category, active:true} : {...category, active: false} )));
    
    if (categoryType === "All") {
      setCategory(food_items);
    } else {
      setCategory(
        food_items.filter((item) => item.food_category === categoryType)
      );
    }
  };

  const categorySearchFilter = (search) => {
    if (categoryType === "All") {
      setCategory(food_items);
    } else {
      console.log(
        food_items.filter((item) => item.food_category === categoryType)
      );

      setCategory(
        food_items.filter((item) => item.food_category === categoryType)
      );
    }
  };

  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 20;
  let taxes = Math.floor((subTotal * 0.5) / 100);
  let allTotal = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* Category */}
      {!input && (
        <div className='w-full'>
          {/* Desktop view */}
          <div className='hidden md:flex flex-wrap justify-center items-center gap-5 mt-5'>
            {foodCategories.map((category, idx) => (
              <div
                id={`category-${idx}`}
                key={`category-${idx}`}
                className={`w-[130px] h-[130px] flex flex-col items-center justify-center gap-3 p-4 text-[16px] font-semibold rounded-lg shadow-xl  cursor-pointer transition-all duration-300 ${((category.active)? 'bg-green-400 text-white' : 'bg-white text-gray-600 hover:bg-green-200' )}`}
                onClick={() => categoryFoodFilter(category.name, category.id)}
              >
                {category.icon}
                {category.name}
              </div>
            ))}
          </div>

          {/* Mobile view */}
          <div className='flex md:hidden overflow-x-auto gap-3 p-2'>
            {foodCategories.map((category, idx) => (
              <button
                key={`mobile-${idx}`}
                id={`category-${idx}`}
                onClick={() => categoryFoodFilter(category.name, category.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full shadow transition' ${((category.active)? 'bg-green-400 text-slate-200' : 'bg-white text-gray-700 hover:bg-green-200' )}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

      )}

      {/* Cards of food */}
      <div className="w-full flex flex-wrap justify-center items-center gap-5 px-5 pt-8 pb-8">
        {category.length > 0 ? (
          category.map((item, idx) => (
            <Card
              key={`card-food-${idx}`}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="mt-5">
            <span className="text-4xl fw-semibold text-green-400">
              No search found...
            </span>
          </div>
        )}
      </div>

      {/* Navbar of Cart */}
      <div
        className={`p-5 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 flex flex-col items-center overflow-auto`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <GiCancel
            className="w-[25px] h-[25px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-green-700"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-8 flex flex-col gap-5">
              {items.map((item, idx) => (
                <CartCard
                  key={`cartcard_${idx}`}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* Cart Price Section */}
            <div className="w-full mt-7 border-t-2 border-b-2 border-gray-400 flex flex-col gap-3 p-4">
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Subtotal
                </span>
                <span className="font-semibold text-md text-green-400">
                  Rs. {subTotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Delivery Fee
                </span>
                <span className="font-semibold text-md text-green-400">
                  Rs. {deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Taxes
                </span>
                <span className="font-semibold text-md text-green-400">
                  Rs. {taxes}/-
                </span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="w-full flex justify-between items-center p-4">
              <span className="font-semibold text-lg text-gray-600">Total</span>
              <span className="font-semibold text-lg text-green-400">
                Rs. {allTotal}/-
              </span>
            </div>

            {/* Place my order */}
            <button
              className="cursor-pointer w-[50%] p-3 bg-green-400 text-white hover:bg-green-500 transition rounded-lg cursor-pointer font-bold"
              onClick={() => {
                dispatch(RemoveAllOrder());
                toast.success("Order place successfully.");
              }}
            >
              Place order
            </button>
          </>
        ) : (
          <>
            <div className="mt-6 text-xl fw-semibold text-green-400">
              Empty Cart
            </div>
            <div className="mt-5">
              <img src={emptyCartImg} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
