import React from "react";
import close_btn from "../../Leaderboard/close-button.png";
import hurry from "../../Tile-Rest-assests/excellent.png";
import oh_oo from "../../assests/whoop.png";
import oops from "../../Tile-Rest-assests/oops.png";
import yesMacot from "../../Tile-Rest-assests/oops.gif";
import noMascot from "../../Tile-Rest-assests/default.png";
import exalert_bg from "../../Tile-Rest-assests/reward history bg.png";
import alert_bg from "../../Tile-Rest-assests/reward history.png";
import '../../css/AlertPopup.css'

export default function AlertPop({ popup, close }) {
  let title;
  let mascot;
  let popbg;

  if (popup.head === "hurray") {
    title = hurry;
    mascot = yesMacot;
    popbg = exalert_bg;
  } else if (popup.head === "ohoo") {
    title = oh_oo;
    mascot = noMascot;
    popbg = alert_bg;
  } else {
    title = oops;
    mascot = noMascot;
    popbg = alert_bg;
  }

  return (
    <div className="popup2">
      <img className="alert-pop-head" src={title} />
      <div
        style={{ background: `center / 100% 100% no-repeat url(${popbg})` }}
        className="popup2-2section alert-pop"
      >
        <div className="alert-pop-message fancyScroll">{popup.message}</div>
        <img className="alert-pop-close" onClick={close} src={close_btn} />
        <img className="mascot-pop" src={mascot} />
      </div>
    </div>
  );
}
