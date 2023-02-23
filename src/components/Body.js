import { useState } from "react";
import { RestaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";

function filterData(search, restaurantData) {
  const newData =  restaurantData.filter((restaurant) => 
    restaurant.data.name.toLowerCase().includes(search.toLowerCase())
  );
  return newData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(RestaurantList);
  return (
    <>
      <div className="searchDiv">
        <input
          type="text"
          className="searchInput"
          placeholder="Search Restaurant...."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const filteredData = filterData(searchText, RestaurantList);
            if(filteredData.length > 0)
            setRestaurant(filteredData);
            else
            {
              setRestaurant(RestaurantList);
              alert("No Restaurant Name matches with the searched text");
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="cardContainer">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
