import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Pages/about';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import Chat from './Components/ChatBot/chatBot';
import Product from './Pages/products';
import Products from './Components/display';
import Cart from './Pages/cart';
import SellProducts from './Pages/sellProduct'
import Userpro from './Pages/userpro';
import Imgpro from './Pages/imgpro';
import Orderstatus from './Pages/orderstatus';
export default function myapp(){
  return (
    <div>
<BrowserRouter>
    <Routes>
      <Route element={<About />} path='/about' />
      <Route element={<Home />} path='/' />
      <Route element={<Login/>} path='/login'/>
      <Route element={<Register />} path='/register'/>
      <Route element={<Chat />} path='/chat' />
      <Route element={<Product />} path='/products'/>
      <Route element={<Products />} path='/temp'/>
      <Route element={<Cart />} path='/cart'/>
      <Route element={<SellProducts />} path='/sellproduct'/>
      <Route element={<Userpro />} path='/userpro'/>
      <Route element={<Imgpro />} path='/imgpro'/>
      <Route element={<Orderstatus />} path='/os'/>
    </Routes>
</BrowserRouter>

    </div>
  );
}