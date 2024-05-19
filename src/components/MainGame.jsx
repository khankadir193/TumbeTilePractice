import React, { useContext, useEffect, useState } from "react";
import Controller from "./Controller";
import Game from "./Game";
// import { UserContext } from "../context/UserContext.js";
import { UserContext } from "../context/UserContext.js";
import mascot_front from "../Header/Front-position.gif";
import fallMascot from "../Tile-Rest-assests/oops.gif";
import pointer from "../Tile-Rest-assests/oops.gif";  // this need to change
import { postCallApi } from "../utilities/api";
import { checkShowData } from "../utilities/helper";

import leftJump from "../Header/left-jump.gif";
import rightJump from "../Header/right-jump.gif";
import { manualPosition, moscotPosition } from "../raw/users/rewards";
import { RankContext } from "../context/RankContext";
import '../css/Game.css';

export default function MainGame() {
  const { user, userInfo, userRefresh, updateRecodRefresh, changeAlertPopUp } =
    useContext(UserContext) || {};

  const { tickerTapRefresh } = useContext(RankContext) || {};
  //Controller States
  let num = parseInt(userInfo?.location?.split("_")[0]) || 0;
  let loc = userInfo?.location?.split("_")[1] || "R";
  let currentT = num == 0 ? 0 : num % 25 || 25;

  const [combo, setCombo] = useState(1);
  const [click, setClicked] = useState(false);
  const [mascot, setMascot] = useState(mascot_front);
  const [currentTile, setCurrentTile] = useState(currentT);
  useEffect(() => {
    if (userInfo) {
      setCurrentTile(currentT);
    }
  }, [userInfo]);

  const [choice, setChoice] = useState(0);
  const [gear, setGear] = useState("manual");
  const [broken, setBroken] = useState(false);
  const [position, setPosition] = useState({ left: 50, bottom: -65 });

  let maxPoint = parseInt(userInfo?.gamePoints / 25000) || 0;

  const [inputToast, setInputToast] = useState("");
  const handlePopUp = (action, data, message) => {
    switch (action) {
      case "CONGRATS":
        changeAlertPopUp(
          true,
          <div>
            <div className="response">
              <span className="response-heading">Congratulations!</span>
              <span className="response-text">
                You just travelled {data?.winCount}{" "}
                {data?.winCount > 1 ? "tiles" : "tile"} in your jump and won
                {checkShowData(data?.rewardDTOList, "api-reward")}
              </span>
            </div>
          </div>,
          "hurray"
        );
        break;
      case "Oops":
        changeAlertPopUp(
          true,
          <div>
            <div className="response">
              <span className="response-text">
                It looks like you slipped. Don't worry, try again!
              </span>
            </div>
          </div>,
          "ohoo"
        );
        break;
      case "POINTS":
        changeAlertPopUp(
          true,
          <div>
            <div className="response">
              <span className="response-heading">Sorry champ</span>
              <span className="response-text">
                we understand your excitement to play, but in order to start
                playing, please spend 25k Beans on event gifts.
              </span>
            </div>
          </div>,
          "oops"
        );
        break;
      default:
        changeAlertPopUp(
          true,
          <div>
            <div className="response">
              <span className="response-text">{message}</span>
            </div>
          </div>,
          "oops"
        );
        break;
    }
  };


  const jump = (jumpGif, left, bottom) => {
    // console.log('jumpGif..',jumpGif,'left..',left,'bottom..',bottom);
    console.log('{ left: left, bottom: bottom + 10 }', { left: left, bottom: bottom + 10 });
    setMascot(jumpGif);
    setPosition({ left: left, bottom: bottom + 10 });
    setTimeout(() => {
      setPosition({ left: left, bottom: bottom });
    }, 400);
  };
  const calculateJump = (cc, id) => {
    if (gear === "manual") {
      const [manualData] = manualPosition.length > 0 ? manualPosition.filter((d) => d.id === id) : null;
      if (cc == "right") {
        jump(rightJump, manualData.right, manualData.bottom);
      } else {
        jump(leftJump, manualData.left, manualData.bottom);
      }
    } else {
      const [filtered] = moscotPosition.length > 0 ? moscotPosition.filter((d) => d.id === id) : null;
      console.log('filtered...calculateJump....', filtered);
      // console.log('position')
      if (cc == "right") {
        jump(rightJump, filtered?.right, filtered?.bottom);
      } else {
        jump(leftJump, filtered?.left, filtered?.bottom);
      }
    }

  };
  const jumpPos = (locc) => {
    console.log('combo...???', combo);
    console.log(locc);
    if (gear === "manual") {
      if (currentT === 0) {
        calculateJump(locc, 1);
      } else {
        calculateJump(locc, 2);
      }
    } else {
      let countStart = currentT === 0 ? 1 : 2;
      let countEnd = combo <= 6 ? combo + 1 : 6;  // this combo is coming from api calling or handleInput
      // let cumstomCombo = 6;
      // let countEnd = cumstomCombo <= 6 ? cumstomCombo + 1 : 6;
      const checkLoop = () => {
        if (countStart <= countEnd) {
          calculateJump(
            combo === 1
              ? locc
              : Math.round(Math.random()) === 1
                ? "right"
                : "left",
            countStart
          );
          setTimeout(() => {
            countStart += 1;
            checkLoop();
          }, 700);
        }
      };
      checkLoop();
    }
  };

  useEffect(() => {
    setChoice(0);
  }, [gear]);
  useEffect(() => {
    setTimeout(() => {
      setInputToast("");
    }, 3000);
  }, [inputToast]);

  const startGame = (check) => {
    // console.log('this is the startGame method..',check);
    if (combo) {
      if (!click) {
        setClicked(true);
        if (maxPoint > 0) {
          // callingApi(check);
        } else {
          jumpPos("right");
          handlePopUp("Oops", null, null);
          setClicked(false);
        }
      }
    } else {
      setInputToast("please enter the number of chances.");
    }
  };
  const callingApi = async() => {
    try {
      const response = await fetch('https://www.streamkar.net/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const response2 = await response.json();
      console.log("response2222...???", response2.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  // useEffect(() => {
  //   if (currentT === 0) {
  //     setPosition({ left: 50, bottom: -65 });
  //   } else {
  //     setPosition({ left: loc === "L" ? 20 : 75, bottom: 7 });
  //   }
  // }, [userInfo]);

  const handleInput = (event) => {
    let max = maxPoint > 99 ? 99 : maxPoint;
    let val = event.target.value.replace(/[^0-9]/g, "");
    let number =
      parseInt(val) > max ? max : parseInt(val) <= 0 ? 1 : parseInt(val);
    setCombo(isNaN(number) ? "" : number);
  };
  const handleLeftRight = (check) => {
    if (gear === "manual") {
      if (!click) {
        setChoice(check);
        startGame(check);
      }
    }
  };
  const [tap, setTap] = useState("tapright");
  useEffect(() => {
    var checkInterval;
    if (num == 0 && choice === 0) {
      checkInterval = setInterval(() => {
        if (tap == "tapright") {
          setTap("tapleft");
        } else {
          setTap("tapright");
        }
      }, 700);
    }
    return () => {
      clearInterval(checkInterval);
    };
  }, [tap, userInfo]);
  return (
    <>
      <span className="chances">JUMPS: {maxPoint}</span>
      <span className="tile-pos">
        Tile No: {currentTile === 25 ? 0 : currentTile}
      </span>
      {userInfo?.openPageTimes === 1 && choice === 0 && (
        <img className={"firstTap " + tap} src={pointer} />
      )}
      {inputToast && <span className="toast">{inputToast}</span>}
      <Game
        loc={loc}
        position={position}
        mascot={mascot}
        broken={broken}
        currentTile={currentTile}
        choice={choice}
        click={click}
        gear={gear}
        handleLeftRight={handleLeftRight}
      />
      <Controller
        click={click}
        combo={combo}
        handleInput={handleInput}
        gear={gear}
        setGear={setGear}
        startGame={startGame}
      />
    </>
  );
}
