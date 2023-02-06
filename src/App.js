import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Location from './components/Location/Location';
import ArtList from './components/ArtList/ArtList';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/artlist' element={<ArtList/>}/>
          <Route path='/gallery' element={<>gallery</>}/>
          <Route path='/location' element={<Location/>}/>
        </Route> 
     </Routes>
    </div>
  );
}

export default App;
