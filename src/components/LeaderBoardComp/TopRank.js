import React from "react";
import gemIcon from "../../Leaderboard/beans-icon.png";
import beanIcon from "../../Leaderboard/beans-icon.png";
import { captureImageError, goTo } from "../../utilities/helper.js";
// import '../Style/OverAllComp.css';
import '../../css/topRank.css';

export default function TopRank({
  rank,
  userId,
  frame,
  avatar,
  name,
  level,
  score,
  talent,
  estReward,
}) {
  return (
    // <div className=`rank rank-${rank}`}>
    //   {userId > 0 && (
    //     <div className="rank-frame">
    //       <img className="rank-frame-image" src={frame} />
    //       <img
    //         className="rank-frame-avatar"
    //         onErrorCapture={captureImageError}
    //         src={avatar}
    //       />
    //       <a
    //         className="rank-frame-link"
    //         onClick={() => goTo(0, userId, userId)}
    //       ></a>
    //     </div>
    //   )}
    //   {userId > 0 && (
    //     <div className="rank-detail">
    //       <span className="rank-detail-name">{name}</span>
    //       <img className="rank-detail-lvl" src={level} />
    //       {estReward && (
    //         <span className="est">
    //           <img src={beanIcon} />
    //           {estReward}
    //         </span>
    //       )}
    //       <span className="rank-detail-score">
    //         <img src={talent ? gemIcon : beanIcon} />
    //         {score}
    //       </span>
    //     </div>
    //   )}
    // </div>

    <div className={`rank`}>
        <div className="rank-profile-img">
          <img className={`rank-frame-image rank-${rank}`} src={frame} />
          <img
            className="rank-frame-avatar"
            onErrorCapture={captureImageError}
            src={avatar}
          />
        </div>
  
        <div className="rank-detail">
          <span className="rank-detail-name">{name}</span>
          <img className="rank-detail-lvl" src={level} />
          {estReward && (
            <span className="est">
              <img src={beanIcon} />
              {estReward}
            </span>
          )}
          <span className="rank-detail-score">
            <img src={talent ? gemIcon : beanIcon} />
            {score}
          </span>
        </div>
    </div>
  );
}
