import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import Home from './components/Home/Home';
import SignUp from './components/Login/SignUp/SignUp';
import ForgetPass from './components/Login/ForgotPass/ForgetPass';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>} />
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>} />
        <Route path='/add-item' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>} />
        <Route path='/my-items' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/forget-password" element={<ForgetPass></ForgetPass>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
