import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-[800px] h-[500px] shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left Side (Blue Section) */}
        <div className="w-1/3 bg-blue-600 p-8 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-semibold">Login</h2>
            <p className="mt-2 text-sm text-gray-200">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
          </div>
          <img
            src="/images/login-img.png"
            alt="Shopping"
            className="w-40 mx-auto"
          />
        </div>

        {/* Right Side (Form Section) */}
        <div className="w-2/3 p-8">
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-6">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
                placeholder="Enter Email or Mobile Number"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
                placeholder="Enter Password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Login
            </button>

            {/* Forgot Password */}
            <p className="text-blue-500 text-sm text-center mt-3 cursor-pointer">
              Forgot Password?
            </p>

            {/* Create Account */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">New to Flipkart?</p>
              <button className="text-blue-600 font-semibold hover:underline">
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
