const Shimmer = () => {
  return (
    <div className="shimmerEffect">
      {[...Array(10)].map((e, i) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card-shimmer">
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>

              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
