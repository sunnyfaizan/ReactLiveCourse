import { useEffect, useState } from "react";
import { Fetch_Restaurant_Menu } from "../constants";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, SetRestaurantMenu] = useState();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const data = await fetch(Fetch_Restaurant_Menu + id);
    const json = await data.json();
    console.log(json?.data);
    SetRestaurantMenu(json?.data);
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
