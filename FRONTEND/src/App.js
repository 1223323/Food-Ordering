import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Home } from './Component/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import  RestaurantDetails  from './Component/Restaurant/RestaurantDetails';
import  {Cart}  from './Component/Cart/Cart';
import  Profile  from './Component/Profile/Profile';
import CustomerRouter from './Component/Routers/CustomerRouter';
import { Auth } from './Component/Auth/Auth';
import { useDispatch,useSelector } from 'react-redux';
import { getUser } from './Component/State/Authentication/Action';
import { useEffect } from'react';
function App() {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem('jwt');
  const {auth}=useSelector(store=>store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))},[auth.jwt])
  

  return (
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />

      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart/> */}
      {/* <Profile />  */}
      <CustomerRouter/>
      
    </ThemeProvider>
  );
}

export default App;
