import Body from "./body";
import Footer from "./footer";
import Logo from "./assests/img/94501.jpg"
import Header from "./header";
import{Outlet, createBrowserRouter}from "react-router-dom" 
import About from "./About";
import Profile from "./profile";
import Contact from "./contact";
import Error from "./Error";
import PesturantMenu from "./ResturantMenu";

export const Title = () => (
  <>
    <a href="/">
      <img className="logo"
        alt="logo"
        src={Logo}
      />

    </a>
  </>
)
 function App () {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/About",
        element:<About/>,
        children: [{
          path:"profile",
          element:<Profile/>}]
      },  
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurantId/:resID",
        element:<PesturantMenu/>
      }
    ],
  },
  
])

export default AppRouter;










