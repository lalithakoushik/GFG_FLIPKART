const products = [
    {
      name: "iPhone 15 Pro",
      price: "₹1,29,900",
      img: "/images/iphone.png",
      rating: "4.5 ⭐",
    },
    {
      name: "Samsung Galaxy S23",
      price: "₹74,999",
      img: "/images/samsung.png",
      rating: "4.4 ⭐",
    },
    {
      name: "OnePlus 11",
      price: "₹61,999",
      img: "/images/oneplus.png",
      rating: "4.6 ⭐",
    },
    {
      name: "Sony WH-1000XM4",
      price: "₹24,990",
      img: "/images/sony-headphones.png",
      rating: "4.7 ⭐",
    },
    {
      name: "Dell XPS 13",
      price: "₹1,40,000",
      img: "/images/dell-laptop.png",
      rating: "4.5 ⭐",
    },
    {
      name: "Apple MacBook Air M2",
      price: "₹1,14,900",
      img: "/images/macbook.png",
      rating: "4.8 ⭐",
    },
  ];
  
  import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.img} alt={product.name} className="w-full h-32 object-contain" />
          <h3 className="text-lg font-medium mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.rating}</p>
          <p className="text-xl font-bold text-blue-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
