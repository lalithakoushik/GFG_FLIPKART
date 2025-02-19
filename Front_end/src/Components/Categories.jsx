const categories=[
    { name: "Mobiles", image: "/images/mobiles.png" },
    { name: "Electronics", image: "/images/electronics.png" },
    { name: "Fashion", image: "/images/fashion.png" },
    { name: "Appliances", image: "/images/appliances.png" },
    { name: "Furniture", image: "/images/furniture.png" },
    { name: "Beauty", image: "/images/beauty.png" },
    { name: "Flight Bookings", image: "/images/flight.png" },
    { name: "Toys", image: "/images/toys.png" },
]
const Categories = () => {
    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-2xl font-bold mb-6">Shop by Category</h2> */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4"> 
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-5 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-2"
                />
                <p className="text-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default Categories;