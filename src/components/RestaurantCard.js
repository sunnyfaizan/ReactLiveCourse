export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  // const {cloudinaryImageId, name, cuisines, lastMileTravelString} = restaurant.data;
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div className="card h-100 restaurantCard">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="restaurant"
        />
        <h3>{name}</h3>
        <h5> {cuisines.join(" , ")}</h5>
        <h6>{lastMileTravelString} Ratings</h6>
      </div>
    </div>
  );
};
