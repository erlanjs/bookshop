import Header from "./components/main/Header/Header";
import Footer from "./components/main/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Categories from "./pages/categories";
import CardItem from "./pages/cardItem";
import Basket from "./pages/basket";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories/:id" element={<Categories/>}/>
        <Route path="/cardItem/:id" element={<CardItem/>}/>
        <Route path="/basket/" element={<Basket/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
