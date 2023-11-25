import React,{useState} from "react";
import ProductItem from "../ProductItem";
// import produtsData from "./src/data/ProductsData.js";

import "./index.css";



const oldProdutsData = [
    {
      id: 1,
      name: "Chicken Breast Fillets",
      brand: "Hormel Black Label",
      price: 60.67,
      quantity: 1,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/appleGreenSmith_krm07h.png",
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      brand: "Chef's Delight",
      price: 12.99,
      quantity: 2,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/avocadoHass_ekj6zv.jpg",
    },
    {
      id: 3,
      name: "Vegetable Stir-Fry",
      brand: "Organic Greens",
      price: 15.49,
      quantity: 3,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/vegetableStirFry_ngmy6r.jpg",
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      brand: "Pizza Hut",
      price: 14.99,
      quantity: 1,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/vegetableStirFry_ngmy6r.jpg",
    },
    {
      id: 5,
      name: "Salmon Fillet",
      brand: "FreshCatch Seafood",
      price: 18.75,
      quantity: 2,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/appleGreenSmith_krm07h.png",
    },
    {
      id: 6,
      name: "Caesar Salad",
      brand: "Salad Delights",
      price: 8.99,
      quantity: 1,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/avocadoHass_ekj6zv.jpg",
    },
    {
      id: 7,
      name: "Chocolate Cake",
      brand: "Sweet Delights Bakery",
      price: 22.5,
      quantity: 1,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813636/margretta_vix0ez.jpg",
    },
    {
      id: 8,
      name: "Apple Green Smith",
      brand: "Sushi Master",
      price: 28.99,
      quantity: 2,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813637/carbonara_r8j4of.jpg",
    },
    {
      id: 9,
      name: "Avocado Hass",
      brand: "Smoky BBQ Grill",
      price: 19.99,
      quantity: 1,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813639/avocadoHass_ekj6zv.jpg",
    },
    {
      id: 10,
      name: "Margarita Cocktail",
      brand: "Cocktail Lounge",
      price: 9.75,
      quantity: 2,
      total: 0,
      status: "",
      actions: "edit",
      img: "https://res.cloudinary.com/dumbnbfci/image/upload/v1700813640/caesarSalad_od1gyc.jpg",
    },
  ];
  

  
  // You now have 10 food items in the array with working image URLs.

const ProductList = () => {

  const [produtsData, setProdutsData] = useState(oldProdutsData)

  const onChangeStatusApp = (productId)=>{
   const updatedProductsData =  produtsData.map(each => each.id === productId ?
    ({...each ,status: "Approved"}): {...each} )

    setProdutsData(updatedProductsData)
    console.log(produtsData)

  }

  const onChangeStatusMiss = (productId,missStatus) => {
    const updatedProductsData =  produtsData.map(each => each.id === productId ?
      ({...each ,status: missStatus}): {...each} )

    setProdutsData(updatedProductsData)
    console.log(produtsData)
  }

  return (
    <div className="list-container">
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {produtsData.map((item, index) => (
            <ProductItem key={index} item={item} onChangeStatusApp={onChangeStatusApp} onChangeStatusMiss = {onChangeStatusMiss}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
