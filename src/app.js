import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

//JSX Element
const Heading = (
  <h1 className="firstElement">
    Heading Using JSX (Multiple Line & It is a React Element)
  </h1>
);

//Functional Component
const MyFunctionalHeading = () => (
  <div>
    {Heading}
    <HeaderComponent />
    {console.log("using js code inside JSX")}
    <h1>My Functional Component</h1>
    <h2>Second Functional Heading</h2>
  </div>
);
//Using Functional Component inside Another functional Component
const HeaderComponent = () => {
  return (
    <div>
      <h1>Component Inside Another Component</h1>
    </div>
  );
};

const HeaderNavbar = () => {
  return (
    <div>
      <div className="topNavbar">
        <img src={logo} className="logo" />
        <input type="text" placeholder="Search..." />
        <img src={user} className="user" />
      </div>
    </div>
  );
};

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const createRoot = ReactDOM.createRoot(document.getElementById("root"));
//Rendering React Element
// createRoot.render(Heading);

//Rendering React Functional Component
// createRoot.render(<MyFunctionalHeading />);

//Functional Component can also be rendered as
// createRoot.render(MyFunctionalHeading());

//Rendering Navbar
createRoot.render(<RouterProvider router={appRouter} />);
