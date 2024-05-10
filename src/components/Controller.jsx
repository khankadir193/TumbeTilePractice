import React from "react";
import jump_btn from "../assests/Jump-button.gif";
import auto from "../assests/auto-btn.png";
import manual from "../assests/manual-btn.png";

export default function Controller({
  combo,
  gear,
  click,
  setGear,
  handleInput,
  startGame,
  setInputToast,
}) {
  const handleGear = () => {
    setGear(gear === "auto" ? "manual" : "auto");
  };
  return (
    <div className="controller">
      <div className="check">
        <div
          className={
            gear === "auto" ? "chances-board" : "chances-board unactive"
          }
        >
          {gear === "auto" ? (
            <input type="text" value={combo} onChange={handleInput} />
          ) : (
            "01"
          )}
        </div>
        <div className="gear-board" onClick={handleGear}>
          {gear === "auto" ? (
            <img className="right" src={auto} />
          ) : (
            <img className="left" src={manual} />
          )}
        </div>
      </div>
      {gear === "auto" && (
        <img
          className={click ? "jump-btn unactive" : "jump-btn"}
          src={jump_btn}
          onClick={startGame}
        />
      )}
    </div>
  );
}
