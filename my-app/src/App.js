import Body from "./body";
import Footer from "./footer";
import React,{lazy,Suspense} from "react";
import Logo from "./assests/img/94501.jpg"
import Header from "./header";
import { Outlet, createBrowserRouter } from "react-router-dom"
import About from "./About";
import Profile from "./profile";
// import shimmer from"./shimmer.js"
import Contact from "./contact";
import Error from "./Error";  
import PesturantMenu from "./ResturantMenu";
import Instamart from "./insta_mart";

//AS IT IS NOT FUNCTIONING RIGHT NOW.(LAZY LOADING)
// const Instamart=lazy(()=>{
//   import("./insta_mart")
// })

// const About=lazy(()=>import("./About"))

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
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/About",
        element: <Suspense fallback ={<h1>Loading...</h1>}> <About /></Suspense>,
        children: [{
          path: "profile",
          element: <Profile />
        }]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurantId/:resID",
        element: <PesturantMenu />
      }
      ,
      {
        path: "/instamart",
        element:<Suspense> <Instamart /></Suspense>
        //suspense is for lazy loading
      }
    ],
  },

])

export default AppRouter;










