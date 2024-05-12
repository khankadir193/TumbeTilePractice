import React from "react";
import jumpBtn from "../Header/Jump-button.gif";
import autoBtn from "../Header/Auto-button.png";
import manualBtn from "../Header/Manual-button.png";
import "../css/Game.css";

export default function Controller({
  combo,
  gear,
  click,
  setGear,
  handleInput,
  startGame,
  setInputToast,
}) {
  const toggleGear = () => {
    setGear(gear === "auto" ? "manual" : "auto");
  };

  return (
    <div className="controller">
      <div className="check">
        <div className={gear === "auto" ? "chances-board" : "chances-board unactive"}>
          {gear === "auto" ? (
            <input type="text" value={combo} onChange={handleInput} />
          ) : (
            "01"
          )}
        </div>
        <div className="gear-board" onClick={toggleGear}>
          <img className={gear === "auto" ? "right" : "left"} src={gear === "auto" ? autoBtn : manualBtn} alt={gear === "auto" ? "Auto" : "Manual"} />
        </div>
      </div>
      {gear === "auto" && (
        <img
          className={click ? "jump-btn unactive" : "jump-btn"}
          src={jumpBtn}
          alt="Jump Button"
          onClick={startGame}
        />
      )}
    </div>
  );
}
