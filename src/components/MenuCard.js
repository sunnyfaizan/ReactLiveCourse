import { Icon } from "@iconify/react";
import { Img_Cdn_Link } from "../constants";

const MenuCard = ({
  name,
  isBestSeller,
  price,
  cloudinaryImageId,
  description,
  category
}) => {
  return (
    <>
      <div className="menuCard mt-3">
        <div className="row">
          <div className="col-md-8">
            {isBestSeller ? (
              <h6 className="d-flex align-items-center">
                <Icon icon="material-symbols:star-rounded" color="yellow" />{" "}
                &nbsp;Bestseller | {category}
              </h6>
            ) : <h6>{category}</h6>}

            <h5 className="fw-bold">{name}</h5>
            <small>{description}</small>
            <h6 className="d-flex align-items-center">
              <Icon icon="bi:currency-rupee" /> {" "}
              {parseInt(price) / 100}
            </h6>
          </div>
          <div className="col-md-4">
            <div className="card">
              {cloudinaryImageId ? (
                <img src={Img_Cdn_Link + cloudinaryImageId} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
