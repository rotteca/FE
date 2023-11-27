import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Regi from './pages/Regi';
import Logi from './pages/Logi';
import Cart from './pages/Cart';


import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate ,
} from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"
import CartItems from './pages/Newcart';
import Introduction from './pages/Introduction';
import Register from './pages/Register';

import TermsandPolicies from './pages/Tnp';
import CustomerServices from './pages/Cs';
import About_Us from './pages/Aboutus';


function App() {
  const user =  useSelector((state) => state.user.currentUser);
  return (
  <Router>
    
    
    <Routes >
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/products/" element={<ProductList/>}></Route>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/introduction" element={<Introduction/>}>
        <Route path="customer-service" element={<CustomerServices/>}/>
        <Route path="terms-and-policies" element={<TermsandPolicies/>}/>
        <Route path="aboutus" element={<About_Us/>}/></Route>
      <Route path="/newcart" element={<CartItems/>}/>
      <Route path="/login" element={user ? <Navigate  to="/" /> : <Logi />}></Route>
      <Route path="/register" element={user ? <Navigate  to="/" /> : <Register />}></Route>
      
    </Routes >
  </Router>);
}

export default App;
