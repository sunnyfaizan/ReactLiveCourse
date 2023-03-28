import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(search, restaurantData) {
  const newData = restaurantData.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(search.toLowerCase())
  );
  return newData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurant) return null;

  // if(filteredRestaurant.length == 0) return <h1>No Restaurant Found</h1>

  return allRestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="searchDiv">
            <input
              type="text"
              className="searchInput form-control"
              placeholder="Search Restaurant...."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="searchBtn btn btn-primary"
              onClick={() => {
                const filteredData = filterData(searchText, allRestaurant);
                setFilteredRestaurant(filteredData);
                // if(filteredData.length > 0)
                // setFilteredRestaurant(filteredData);
                // else
                // {
                //   setFilteredRestaurant(allRestaurant);
                //   alert("No Restaurant Name matches with the searched text");
                // }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {filteredRestaurant.length == 0 ? (
        <h1 className="noResFound">No Restaurant Found!!</h1>
      ) : (
        <div className="cardContainer">
          {filteredRestaurant.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data?.id}/>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
