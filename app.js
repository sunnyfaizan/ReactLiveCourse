// const myHeading = React.createElement("h1", {
//     id: 'rootId',
//     className: 'rootclass'
// }, "Fetched Using Pure React");
// const myRoot = ReactDOM.createRoot(document.getElementById('root'));
// myRoot.render(myHeading);
// import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logonew.jpg";
import user from "./assets/user.png";
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

const Header = () => {
       return (
              <div className="navbar">
                     <a href="/">
                     <img className="navbarLogo" src={logo} />
                     </a>
                     <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Cart</li>
                     </ul>
              </div>
       )
}

const RestaurantList = [
       {
              type: "restaurant",
              data: {
                type: "F",
                id: "73011",
                name: "KFC",
                uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
                city: "22",
                area: "Anand Vihar Colony",
                totalRatingsString: "5000 ratings",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                tags: [],
                costForTwo: 30000,
                costForTwoString: "₹300 FOR TWO",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                slaString: "31 MINS",
                lastMileTravel: 6.199999809265137,
                slugs: {
                  restaurant: "kfc-chukkuwala-chukkuwala",
                  city: "dehradun",
                },
                cityState: "22",
                address:
                  "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
                locality: "Clock Tower",
                parentId: 547,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "50% off",
                  shortDescriptionList: [
                    {
                      meta: "50% off | Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "50% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                ribbon: [
                  {
                    type: "PROMOTED",
                  },
                ],
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "6.1 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "73011",
                  deliveryTime: 31,
                  minDeliveryTime: 31,
                  maxDeliveryTime: 31,
                  lastMileTravel: 6.199999809265137,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: true,
                avgRating: "4.0",
                totalRatings: 5000,
                new: false,
              },
              subtype: "basic",
            },
            {
              type: "restaurant",
              data: {
                type: "F",
                id: "542132",
                name: "Domnik Pizza",
                uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
                city: "22",
                area: "Majra    Bansal Home",
                totalRatingsString: "50 ratings",
                cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
                cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
                tags: [],
                costForTwo: 30000,
                costForTwoString: "₹300 FOR TWO",
                deliveryTime: 33,
                minDeliveryTime: 33,
                maxDeliveryTime: 33,
                slaString: "33 MINS",
                lastMileTravel: 0.6000000238418579,
                slugs: {
                  restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
                  city: "dehradun",
                },
                cityState: "22",
                address:
                  "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
                locality: "Patel Nagar",
                parentId: 22321,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "50% off",
                  shortDescriptionList: [
                    {
                      meta: "50% off | Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "50% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "0.6 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "542132",
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  lastMileTravel: 0.6000000238418579,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: false,
                avgRating: "3.8",
                totalRatings: 50,
                new: false,
              },
              subtype: "basic",
            },
            {
              type: "restaurant",
              data: {
                type: "F",
                id: "321517",
                name: "FOOD PLANET RESTAURANT",
                uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
                city: "22",
                area: "Majra",
                totalRatingsString: "50 ratings",
                cloudinaryImageId: "ykboewqeoxnne8fgrnui",
                cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
                tags: [],
                costForTwo: 20000,
                costForTwoString: "₹200 FOR TWO",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                slaString: "25 MINS",
                lastMileTravel: 0.699999988079071,
                slugs: {
                  restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
                  city: "dehradun",
                },
                cityState: "22",
                address:
                  "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
                locality: "Patel Nagar",
                parentId: 81850,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "50% off",
                  shortDescriptionList: [
                    {
                      meta: "50% off | Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "50% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "0.6 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "321517",
                  deliveryTime: 25,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 25,
                  lastMileTravel: 0.699999988079071,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: false,
                avgRating: "2.8",
                totalRatings: 50,
                new: false,
              },
              subtype: "basic",
            },
            {
              type: "restaurant",
              data: {
                type: "F",
                id: "311806",
                name: "Burger King",
                uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
                city: "22",
                area: "Anand Vihar Colony",
                totalRatingsString: "5000 ratings",
                cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
                cuisines: ["Burgers", "American"],
                tags: [],
                costForTwo: 35000,
                costForTwoString: "₹350 FOR TWO",
                deliveryTime: 39,
                minDeliveryTime: 39,
                maxDeliveryTime: 39,
                slaString: "39 MINS",
                lastMileTravel: 6.300000190734863,
                slugs: {
                  restaurant: "burger-king-chakrata-road-ballupur",
                  city: "dehradun",
                },
                cityState: "22",
                address:
                  "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
                locality: "CHAKRATA ROAD",
                parentId: 166,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "60% off",
                  shortDescriptionList: [
                    {
                      meta: "60% off | Use STEALDEAL",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "60% off up to ₹120 | Use code STEALDEAL",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "60% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use STEALDEAL",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "60% off up to ₹120 | Use code STEALDEAL",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                ribbon: [
                  {
                    type: "PROMOTED",
                  },
                ],
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "6.3 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "311806",
                  deliveryTime: 39,
                  minDeliveryTime: 39,
                  maxDeliveryTime: 39,
                  lastMileTravel: 6.300000190734863,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: true,
                avgRating: "4.2",
                totalRatings: 5000,
                new: false,
              },
              subtype: "basic",
            },
            {
              type: "restaurant",
              data: {
                type: "F",
                id: "132460",
                name: "Annapurna Andhra Mess",
                uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
                city: "22",
                area: "Dehradun",
                totalRatingsString: "1000 ratings",
                cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
                cuisines: ["South Indian", "Biryani", "North Indian"],
                tags: [],
                costForTwo: 20000,
                costForTwoString: "₹200 FOR TWO",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                slaString: "25 MINS",
                lastMileTravel: 1.399999976158142,
                slugs: {
                  restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
                  city: "dehradun",
                },
                cityState: "22",
                address:
                  "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
                locality: "Patel Nagar",
                parentId: 33997,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "50% off",
                  shortDescriptionList: [
                    {
                      meta: "50% off | Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "50% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "1.3 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "132460",
                  deliveryTime: 25,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 25,
                  lastMileTravel: 1.399999976158142,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: false,
                avgRating: "4.0",
                totalRatings: 1000,
                new: false,
              },
              subtype: "basic",
            },
            {
              type: "restaurant",
              data: {
                type: "F",
                id: "496677",
                name: "Uncle Ji Restaurant",
                uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
                city: "22",
                area: "Patel Nagar",
                totalRatingsString: "Too Few Ratings",
                cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
                cuisines: ["North Indian", "Snacks", "Beverages"],
                tags: [],
                costForTwo: 30000,
                costForTwoString: "₹300 FOR TWO",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                slaString: "31 MINS",
                lastMileTravel: 0.800000011920929,
                slugs: {
                  restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
                  city: "dehradun",
                },
                cityState: "22",
                address: "348 santosh tower, majra road gram majra dehradun 248001",
                locality: "Patel Nagar",
                parentId: 298209,
                unserviceable: false,
                veg: false,
                select: false,
                favorite: false,
                tradeCampaignHeaders: [],
                aggregatedDiscountInfo: {
                  header: "50% off",
                  shortDescriptionList: [
                    {
                      meta: "50% off | Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                aggregatedDiscountInfoV2: {
                  header: "50% OFF",
                  shortDescriptionList: [
                    {
                      meta: "Use WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "50% off up to ₹100 | Use code WELCOME50",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  subHeader: "",
                  headerType: 0,
                  superFreedel: "",
                },
                chain: [],
                feeDetails: {
                  fees: [],
                  totalFees: 0,
                  message: "",
                  title: "",
                  amount: "",
                  icon: "",
                },
                availability: {
                  opened: true,
                  nextOpenMessage: "",
                  nextCloseMessage: "",
                },
                longDistanceEnabled: 0,
                rainMode: "NONE",
                thirdPartyAddress: false,
                thirdPartyVendor: "",
                adTrackingID: "",
                badges: {
                  imageBased: [],
                  textBased: [],
                  textExtendedBadges: [],
                },
                lastMileTravelString: "0.8 kms",
                hasSurge: false,
                sla: {
                  restaurantId: "496677",
                  deliveryTime: 31,
                  minDeliveryTime: 31,
                  maxDeliveryTime: 31,
                  lastMileTravel: 0.800000011920929,
                  lastMileDistance: 0,
                  serviceability: "SERVICEABLE",
                  rainMode: "NONE",
                  longDistance: "NOT_LONG_DISTANCE",
                  preferentialService: false,
                  iconType: "EMPTY",
                },
                promoted: false,
                avgRating: "--",
                totalRatings: 0,
                new: false,
              },
              subtype: "basic",
            },
]

const RestaurantCard = ({name, cloudinaryImageId, cuisines, lastMileTravelString}) => {
       // const {cloudinaryImageId, name, cuisines, lastMileTravelString} = restaurant.data;
       return (
                     <div className="card">
                     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="restaurant" />
                     <h3>{name}</h3>
                     <h5>{cuisines.join(" , ")}</h5>
                     <h6>{lastMileTravelString} Ratings</h6>
              </div>
       )
}
const Body = () => {
       return (
              <>
              <div className="cardContainer">
                     {
                            RestaurantList.map((restaurant) => {
                                   return <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
                            })
                     }
              {/* <RestaurantCard {...RestaurantList[0].data}/>
              <RestaurantCard {...RestaurantList[1].data}/>
              <RestaurantCard {...RestaurantList[2].data}/>
              <RestaurantCard {...RestaurantList[3].data}/>
              <RestaurantCard {...RestaurantList[4].data}/>
              <RestaurantCard {...RestaurantList[5].data}/> */}
              </div>
              </>
       )
}
const Footer = () => {
       return (
              <h1>This is my footer</h1>
       )
}

const AppLayout = () => {
  return (
       <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
  )
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
