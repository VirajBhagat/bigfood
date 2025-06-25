import React from "react";
import image1 from "../assets/img/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();

  return (
    <div className="w-[300px] bg-white p-4 rounded-lg flex flex-col gap-3 hover:border-2 border-green-300">
      {/* Image Section */}
      <div className="w-full aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 flex-grow">
        <div className="text-xl font-semibold">{name}</div>

        <div className="w-full flex justify-between items-center flex-wrap gap-2">
          <div className="text-base sm:text-lg font-bold text-green-500">
            Rs {price} /-
          </div>
          <div className="flex justify-center items-center gap-2 text-sm sm:text-lg font-semibold text-green-500">
            {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
            <span>{type === "veg" ? "Veg" : "Non Veg"}</span>
          </div>
        </div>
        
        <button
          className="w-full p-3 bg-green-400 text-white hover:bg-green-300 transition rounded-lg cursor-pointer font-bold"
          onClick={() => {
            dispatch(
              AddItem({ id: id, name: name, price: price, img: image, qty: 1 })
            );
            toast.success("Item added in cart.");
          }}
        >
          Add to dish
        </button>
      </div>
    </div>
  );
}

export default Card;
