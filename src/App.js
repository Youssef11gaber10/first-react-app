import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Mainlayout from './Components/Layouts/MainLayout/Mainlayout';
import { Children } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
// import Portofolio from './Components/Portofolio/Portofolio';
// import Portofolio from './Components/Portofolio un ulpdated/Portofolio';
import Portofolio from './Components/portofolio wilth on click/Portofolio';
import Notfound from './Components/Notfound/Notfound';
function App() {


const routes = createBrowserRouter([{path:'/',element:<Mainlayout/>,children:[
  {index:true,element:<Home/>},//* here because the number of port navigate to home
  {path:'home',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'contact',element:<Contact/>},
  {path:'Portofolio',element:<Portofolio/>},
  {path:'*',element:<Notfound/>}
 
]}
])


  return (
     <>
     <RouterProvider router={routes}/>

     </>
  );
}

export default App;
