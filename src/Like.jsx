import { useState } from "react";

export default function Like() {
  let [isLike, setLike] = useState(false);
  let [clcik, setClick] = useState(0);

  let toggleLike = () => {
    setLike(!isLike);
    setClick(clcik + 1);
  };

  let LikeStyle = { color: "red" };
  return (
    <div>
      <p>Click = {clcik}</p>
      <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={LikeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
