import { Routes, Route } from 'react-router-dom';
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
     <Routes>
      <Route path='/Capstone-Project' element={<Layout count = {cart.length} />}>
      <Route path='/Capstone-Project' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/artlist' element={<ArtList  productdata = {Data}  addToCart ={addToCart} />}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/cart' element={<Cart   cart = {cart}  />}/>
        </Route> 
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
