import React, { createContext, useState } from "react";
import { food_items } from "../server_manager/food";
import Categories from "../components/Category";

export const dataContext = createContext();

function UserContext({ children }) {
    let [category, setCategory] = useState(food_items);
    let [foodCategories, setFoodCategories] = useState(Categories);
    let [input, setInput] = useState("");
    let [showCart, setShowCart] = useState(false);

    let data = {input, setInput, category, setCategory, foodCategories, setFoodCategories, showCart, setShowCart};

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    );
}

export default UserContext;
