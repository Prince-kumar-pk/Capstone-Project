import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Location from './components/Location/Location';
import ArtList from './components/ArtList/ArtList';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Data from './components/Detaildata/detaildata';
import { useState } from 'react';

function App() {

  const [cart, setcart] = useState([])
 

  const addToCart = (itemdata) => {
    console.log(itemdata)
    setcart([ ...cart , { ...itemdata,  quantity : 1} ])
    console.log(cart)

  }

  return (
    <div className="App">

      <BrowserRouter basename="/Capstone-Project">
     <Routes>
      <Route path='/Capstone-Project' element={<Layout count = {cart.length} />}>
      <Route path='/Capstone-Project' element={<Home/>}/>
          <Route path='/Capstone-Project/home' element={<Home/>}/>
          <Route path='/Capstone-Project/about' element={<About/>}/>
          <Route path='/Capstone-Project/artlist' element={<ArtList  productdata = {Data}  addToCart ={addToCart} />}/>
          <Route path='/Capstone-Project/gallery' element={<Gallery/>}/>
          <Route path='/Capstone-Project/location' element={<Location/>}/>
          <Route path='/Capstone-Project/cart' element={<Cart   cart = {cart}  />}/>
        </Route> 
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
