import { Search, ShoppingCart, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold italic">
            Flipkart
          </h1>
          <span className="text-xs text-gray-200">Explore Plus</span>
        </div>
        <div className="flex items-center bg-white rounded-md px-3 py-1 w-96">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full p-1 outline-none text-black"
          />
        </div>
        <div className="flex items-center space-x-6">
          <button className="bg-white text-blue-600 px-4 py-1 rounded-md font-medium">
            Login
          </button>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Become a Seller</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>More</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center cursor-pointer">
            <ShoppingCart size={22} />
            <span className="ml-1">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
