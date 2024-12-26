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
function App() {
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
