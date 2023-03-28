export function filterData(search, restaurantData) {
    const newData = restaurantData.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(search.toLowerCase())
    );
    return newData;
  }