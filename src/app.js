import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

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

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const createRoot = ReactDOM.createRoot(document.getElementById("root"));
//Rendering React Element
// createRoot.render(Heading);

//Rendering React Functional Component
// createRoot.render(<MyFunctionalHeading />);

//Functional Component can also be rendered as
// createRoot.render(MyFunctionalHeading());

//Rendering Navbar
createRoot.render(<AppLayout />);
