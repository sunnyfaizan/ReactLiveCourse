import { useState } from "react";
import { useParams } from "react-router-dom";
import { Img_Cdn_Link } from "../constants";
import Shimmer from "./Shimmer";
import { Icon } from "@iconify/react";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const params = useParams();

  const [restaurantMenu, SetRestaurantMenu] = useState();

  useState(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        params.id
    );
    const json = await data.json();
    console.log(json?.data);
    SetRestaurantMenu(json?.data);
  }
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              className="rounded"
              src={Img_Cdn_Link + restaurantMenu?.cloudinaryImageId}
              alt="Restaurant Image"
            />
          </div>
        </div>
        <div className="col-md-8">
          <h4 className="mt-3 fw-bold">{restaurantMenu?.name}</h4>
          <h6 className="d-flex align-items-center">
            <Icon icon="material-symbols:my-location-outline" color="blue" />{" "}
            &nbsp; {restaurantMenu?.area} - {restaurantMenu?.city}
          </h6>
          <h6 className="d-flex align-items-center">
            <Icon icon="mdi:money" color="green" /> &nbsp;{" "}
            {restaurantMenu?.costForTwoMsg}
          </h6>
          <h6 className="d-flex ">
            <Icon icon="material-symbols:star-rounded" color="yellow" /> &nbsp;{" "}
            {restaurantMenu?.avgRating}
          </h6>
        </div>
      </div>
      <div className="row justify-content-center">
        { Object.values(restaurantMenu?.menu?.items).map((item)=> 
            <div className="col-md-8" key={item?.id}>
              <MenuCard {...item} />
            </div>
        )
        }
      </div>
    </>
  );
};

export default RestaurantMenu;
