
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home'
import Nopage from './pages/Nopage'
import Browse from './pages/Browse';
import Details from './pages/Details';
import Stream from './pages/Streams';
import Profile from './pages/Profile';
import Product from './pages/product';
import Mounted from './pages/mount/mount';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>

        <Route index element = {<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='browse' element = {<Browse/>}/>
        <Route path='details' element = {<Details/>}/>
        <Route path='streams' element = {<Stream/>}/>
        <Route path='profile' element = {<Profile/>}/>
        <Route path='mounted' element = {<Mounted/>}/>
        <Route path='#' element = {<Nopage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
