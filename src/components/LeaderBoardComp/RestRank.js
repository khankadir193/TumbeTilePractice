import React from "react";
import gemIcon from "../../Leaderboard/beans-icon.png";
import beanIcon from "../../Leaderboard/beans-icon.png";
import { captureImageError, goTo } from "../../utilities/helper.js";
import '../../css/OverAllComp.css';
import '../../css/topRank.css';

export default function RestRank({
    talent,
    userId,
    rank,
    avatar,
    name,
    level,
    score,
    estReward,
}) {
    return (
        <div className="rest">
            <span className="rest-rank">{rank}</span>
            <div className="flex">
                {" "}
                <a className="rest-frame" onClick={() => goTo(0, userId, userId)}>
                    <img
                        onErrorCapture={captureImageError}
                        className="rest-frame-img"
                        src={avatar}
                    />
                </a>
                <span className="rest-user">
                    <span className="rest-user-name">
                        {name.slice(0, 10)}
                        {name.length > 10 && "..."}
                    </span>
                    <img className="rest-user-lvl" src={level} />
                </span>
            </div>

            <span className="est">
                {estReward && <img src={beanIcon} />}
                {estReward}
            </span>
            <span className="rest-score">
                <img style={{width:'4vw'}} src={talent ? gemIcon : beanIcon} />
                {score}
            </span>
        </div>
    );
}
