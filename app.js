// const myHeading = React.createElement("h1", {
//     id: 'rootId',
//     className: 'rootclass'
// }, "Fetched Using Pure React");
// const myRoot = ReactDOM.createRoot(document.getElementById('root'));
// myRoot.render(myHeading);
// import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Old Methods of creating elemnt
 * Now we use JSX
 */
// const heading1 = React.createElement(
//   "h1",
//   { id: "head1", key: "a" },
//   "My First Heading using parcels"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "head2", key: "b" },
//   "My Second Heading"
// );
// const ourContainer = React.createElement("div", {}, [heading1, heading2]);
// console.log(heading1);

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
       )
}


const createRoot = ReactDOM.createRoot(document.getElementById("root"));
//Rendering React Element
// createRoot.render(Heading);

//Rendering React Functional Component
createRoot.render(<MyFunctionalHeading />);

//Functional Component can also be rendered as 
// createRoot.render(MyFunctionalHeading());
