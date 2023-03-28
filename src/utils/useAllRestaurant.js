import { useState, useEffect } from "react";
import { Fetch_All_Restaurant } from "../constants";

const useAllRestaurant = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    const data = await fetch(Fetch_All_Restaurant);
    const json = await data.json();
    console.log(json);
    // setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  return filteredRestaurant;
};

export default useAllRestaurant;
