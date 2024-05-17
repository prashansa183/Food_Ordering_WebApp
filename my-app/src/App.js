import Body from "./body";
import Footer from "./footer";
import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/User_Context";
import { Provider } from "react-redux";
import Store from "./utils/store";
import Cart from "./cart";
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

  const [user, setuser] = useState({
    name: "Ankush Raj",
    email: "supportANkush@gmail.com"
  })
  return (
    <>
      <Provider store={Store}>
      <UserContext.Provider value={{ user: user, setuser: setuser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
      {/* document.getElementById('root') */}
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
        element: <Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>,
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
        element: <Suspense  fallback={<h1>Loading Instamart...</h1>}> <Instamart /></Suspense>
        //suspense is for lazy loading
      },
      {
        path:"/cart",
        element:<Cart/>

      }
    ],
  },

])

export default AppRouter;










