import React from "react";

import unknown from "../../assests/unknown.png";
import {
  captureImageError,
  getOrdinal,
  goTo,
  xtra,
} from "../../utilities/helper";
import { rewGet } from "../../utilities/imageContext";
export default function SingleMarquee({
  description,
  ranking,
  name,
  image,
  userId,
  score,
}) {
  return (
    <div key={ranking} className="game-marquee-container">
      <a
        className="game-marquee-container-image"
        onClick={() => goTo(0, userId, userId)}
      >
        <img onErrorCapture={captureImageError} src={image ? image : unknown} />
      </a>
      <div className="game-marquee-container-detail">
        <span className="game-marquee-container-detail-name">
          Fantastic! {name}{" "}
        </span>
        <span className="game-marquee-container-detail-desc">
          has won{" "}
          {description?.map((_d) => (
            <>
              {" "}
              <img src={rewGet(_d.desc)} /> {_d.desc} {xtra(_d.desc, _d.count)}{" "}
            </>
          ))}
          Congratulations!.
        </span>
      </div>
    </div>
  );
}
