export const RestaurantCard = ({name, cloudinaryImageId, cuisines, lastMileTravelString}) => {
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