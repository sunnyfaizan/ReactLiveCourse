import { Link } from "react-router-dom";
import { Img_Cdn_Link } from "../constants";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  id
}) => {
  // const {cloudinaryImageId, name, cuisines, lastMileTravelString} = restaurant.data;
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 p-2">
        <Link to={"/restaurant/"+ id}>
      <div className="card h-100 restaurantCard">
        <img
          src={Img_Cdn_Link
             +
            cloudinaryImageId
          }
          alt="restaurant"
        />
        <h3>{name}</h3>
        <h5> {cuisines.join(" , ")}</h5>
        <h6>{lastMileTravelString} Ratings</h6>
      </div>
      </Link>
    </div>
  );
};