import Header from './Components/Header.jsx';
import Categories from './Components/Categories.jsx';
import Slides from './Components/Slides.jsx';
// import Login from './Components/Login.jsx';
import Products from './Components/Products.jsx';
export default function App() {
  return (
    <>
      <Header />
      <Categories/>
      <Slides/>
      {/* <Login/> */}
      <Products/>
    </>
  );
}