import React from "react";
import broken_tile from "../Header/wrong-tile-end.gif";
import finish_tile from "../Header/finish-bundle.gif";
export default function Tiles({
  absolute,
  currentTile,
  newArray,
  choice,
  broken,
  handleLeftRight,
  calculateWidthAndHeight,
  loc,
}) {
  let nextTile = currentTile === 25 ? 1 : currentTile + 1;

  return (
    <div className={absolute ? "tiles absolute" : "tiles"}>
      <div className="tiles-tile">
        {newArray.map((d, index) => {
          const { width, height } = calculateWidthAndHeight(
            d.id,
            currentTile === 0 ? 1 : currentTile,
            52,
            15
          );
          const { finwidth, finheight } = calculateWidthAndHeight(
            25,
            currentTile === 0 ? 1 : currentTile,
            100,
            60
          );

          return (
            <>
              {currentTile == d.id ? (
                <span className="tiles-tile-single" key={index}>
                  <span
                    style={{
                      width: `${width}vw`,
                      height: `${height}vw`,
                      position: "relative",
                    }}
                  >
                    {currentTile === 0 && broken && choice == "left" ? (
                      <img
                        className="broken-tile tile-left"
                        src={broken_tile}
                      />
                    ) : (
                      <img
                        style={{
                          width: `${width}vw`,
                          height: `${height}vw`,
                        }}
                        src={
                          (nextTile === d.id && choice == "left") ||
                          (currentTile === d.id && loc == "L")
                            ? d.Selectleft
                            : d.UnSelectleft
                        }
                      />
                    )}
                  </span>
                  <span
                    style={{
                      width: `${width}vw`,
                      height: `${height}vw`,
                      position: "relative",
                    }}
                  >
                    {currentTile === 0 && broken && choice == "right" ? (
                      <img
                        className="broken-tile tile-right"
                        src={broken_tile}
                      />
                    ) : (
                      <img
                        style={{
                          width: `${width}vw`,
                          height: `${height}vw`,
                          alignSelf: "flex-end",
                        }}
                        src={
                          (nextTile === d.id && choice == "right") ||
                          (currentTile === d.id && loc == "R")
                            ? d.SelectRight
                            : d.UnSelectRight
                        }
                      />
                    )}
                  </span>
                </span>
              ) : (
                <span className="tiles-tile-single" key={index}>
                  <span
                    style={{
                      width: `${width}vw`,
                      height: `${height}vw`,
                      position: "relative",
                    }}
                  >
                    {nextTile === d.id && broken && choice == "left" ? (
                      <img
                        className="broken-tile-2 tile-left"
                        src={broken_tile}
                      />
                    ) : (
                      <img
                        style={{ width: `${width}vw`, height: `${height}vw` }}
                        onClick={
                          nextTile === d.id
                            ? () => handleLeftRight("left")
                            : null
                        }
                        src={
                          (nextTile === d.id && choice == "left") ||
                          (currentTile === d.id && loc == "L")
                            ? d.Selectleft
                            : d.UnSelectleft
                        }
                      />
                    )}
                  </span>
                  <span
                    style={{
                      width: `${width}vw`,
                      height: `${height}vw`,
                      position: "relative",
                    }}
                  >
                    {" "}
                    {nextTile === d.id && broken && choice == "right" ? (
                      <img
                        className="broken-tile-2 tile-right"
                        src={broken_tile}
                      />
                    ) : (
                      <img
                        style={{ width: `${width}vw`, height: `${height}vw` }}
                        onClick={
                          nextTile === d.id
                            ? () => handleLeftRight("right")
                            : null
                        }
                        src={
                          (nextTile === d.id && choice == "right") ||
                          (currentTile === d.id && loc == "R")
                            ? d.SelectRight
                            : d.UnSelectRight
                        }
                      />
                    )}
                  </span>
                  {d.id === 25 && !absolute && (
                    <img
                      className="finish-line"
                      style={{
                        width: `${finwidth}vw`,
                        height: `${finheight}vw`,
                      }}
                      src={finish_tile}
                    />
                  )}
                </span>
              )}
            </>
          );
        })}
      </div>
      {currentTile < 18 || currentTile === 25 ? (
        <img className="finish-line from-start" src={finish_tile} />
      ) : (
        ""
      )}
    </div>
  );
}
