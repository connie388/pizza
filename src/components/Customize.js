import React from "react";

function Customize({
  customize,
  setItem,
  image,
  alt,
  setCurrentData,
  data,
  children,
}) {
  const customizeItem = () => {
    setCurrentData(data);
    setItem("customize");
  };

  return (
    <div>
      {customize ? (
        <div
          className="image-container"
          onClick={(e) => {
            customizeItem();
          }}
        >
          <img className="menu-image" src={image} alt={alt} />
          <p className="customize regular-font weight-light">Customize</p>
          {children}
        </div>
      ) : (
        <div className="image-container">
          <img className="menu-image" src={image} alt={alt} />
          {children}
        </div>
      )}
    </div>
  );
}

export default Customize;
