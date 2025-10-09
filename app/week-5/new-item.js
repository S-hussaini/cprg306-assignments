"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  
  //Create increment and decrement functions to adjust the quantity state variable.
  //The increment function should increase quantity by 1, up to a maximum of 20.
  //The decrement function should decrease quantity by 1, down to a minimum of 1.
  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  
  //Create a handleSubmit function. This function should:
 //Prevent the form's default submission behavior.
 //Create an item object with the current values of name, quantity, and category.
 //Log the item object to the console.
 //Display an alert with the current state of name, quantity, and category.
 //Reset the state variables to their initial values
 
 function handleSubmit(event){
  event.preventDefault();
  
  const item = 
  {
    name: name, 
    quantity: quantity, 
    category: category,
  };

  console.log("New Item:", item);
  
  alert("item added successfully!\nName:"+name+
     "\nQuantity:"+quantity+
     "\nCategory:"+category);
  
  // Reset the state variables to their initial values
  setName("");
  setQuantity(1);
  setCategory("produce"); 
 }
 
/* In the return statement of your function, create a form that includes:
Name Field
Create an input field of type text.
The value of the input field should be tied to the name state variable, meaning that it displays the current value of name.
Use the setName function in an onChange event handler to update the state of name as the user types into the field.
Add required attribute to the input field to ensure that the user cannot submit the form without providing a name.
Quantity
Already completed in Week 4.
Category Field
Create a select element for the category.
The value of the select element should be tied to the category state variable.
Use the setCategory function in an onChange event handler to update the state of category as the user selects a different option.
Create various option elements within the select for each possible category ("Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"). Each option should have a value that matches the category it represents.
Submit Button
Create a submit button that triggers the handleSubmit function when clicked.
*/

  return (
    <div className = "">
    <form onSubmit={handleSubmit}
      className="">
      <div>
        <lable className="">
          Item Name
        </lable>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className = ""
          placeholder="Enter item name"
        />
      </div>

      <div>
        <lable className="block text-gray-200 font-medium mb-1">
          Quantity 
        </lable>
        <div className="flex items-center gap-6">
          <button
            onClick={decrement}
            type="button"
            disabled={quantity === 1}
            className="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-red-500 text-white rounded-full hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition">
            -
          </button>
          <span className="text-3xl font-semibold text-white">{quantity}</span>
          <button
            onClick={increment}
            type="button"
            disabled={quantity === 20}
            className="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-green-500 text-white rounded-full hover:bg-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition">
            +
          </button>
        </div>
        <p className="text-gray-300 text-sm">
          Allowed range: 1-20
        </p>
      </div>

      <div> 
        <label className="">
          Category
        </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>  

      <div>
        <button 
        type="submit"
        className="">
          Add Item
        </button>
      </div>
    </form>
  </div>
  );
}
