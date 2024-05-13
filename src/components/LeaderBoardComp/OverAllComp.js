import React, { useEffect, useState } from 'react';
import frameOne from '../../Leaderboard/1st.png';
import frameTwo from '../../Leaderboard/2nd.png';
import frameThree from '../../Leaderboard/3rd.png';
import seemorebtn from "../../Leaderboard/see-more-btn.png";
import seelessbtn from "../../Leaderboard/see-less-btn.png";
import TopRank from "./TopRank.js";
import { getLevelUrl } from "../../utilities/helper.js";
import RestRank from "./RestRank.js";
import '../../css/OverAllComp.css';

// import unknown from "../../assests/unknown.png";



const OverAll = ({talent,estReward,prev,data}) => {
  console.log('overall Leaderboard component');
  const [dataLength, setDataLength] = useState(10);
  const changeSeeBtn = () => {
    if (dataLength === 10) {
      setDataLength(20);
    } else {
      setDataLength(10);
    }
  };
  const [leaderboardInfo, setLeaderboardInfo] = useState(null);
  let topData = data ? data.slice(0,3) : [];
  let restData = data ? data.slice(3,dataLength) : [];
  // let data = data;

  if (topData.length == 2)
    topData.push({
      actorLevel: 0,
      liveType: 0,
      nickname: "",
      portrait: "",
      ranking: 0,
      userId: 0,
      userLevel: 0,
      userScore: 0,
    });


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://www.streamkar.net/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log("data...???", data);
  //       setLeaderboardInfo(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // empty dependency array to run only once on component mount


  return (
    <div>
      <div className="leader-board">
        {topData?.map(
          (
            {
              actorLevel,
              userLevel,
              userId,
              nickname,
              userScore,
              desc,
              portrait,
            },
            i
          ) => {
            let rank = i + 1;
            var totalBeans;
            var text = prev ? "Won: " : "Est: ";

            if (rank === 1) {
              let cal = (estReward * 40) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 2) {
              let cal = (estReward * 30) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 3) {
              let cal = (estReward * 10) / 100;
              totalBeans = text + parseInt(cal);
            }
            return (
              <TopRank
                talent={talent}
                userId={userId}
                level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                name={nickname}
                rank={rank}
                avatar={portrait ? portrait : ''}
                score={userScore}
                estReward={estReward && totalBeans}
                frame={
                  rank === 1
                    ? frameOne
                    : rank === 2
                      ? frameTwo
                      : rank === 3
                        ? frameThree
                        : null
                }
              />
            );
          }
        )}
        <div className="rest-rankk fancyScroll">
          {data.length > 0 ? (
            restData?.map(
              (
                {
                  actorLevel,
                  userLevel,
                  userId,
                  nickname,
                  userScore,
                  desc,
                  portrait,
                },
                i
              ) => {
                let rank = i + 4;

                var totalBeans;
                var text = prev ? "Won: " : "Est: ";
                if (rank === 4) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                } else if (rank === 5) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                }
                return (
                  <RestRank
                    userId={userId}
                    level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                    name={nickname}
                    avatar={portrait ? portrait : ''}
                    rank={rank}
                    score={userScore}
                    talent={talent}
                    estReward={estReward && totalBeans}
                  />
                );
              }
            )
          ) : (
            <span className="flexCenter mrtop">No Record Found</span>
          )}
        </div>
      </div> 
      {/* <div className="leader-board">
        {topData?.map(
          (
            {
              actorLevel,
              userLevel,
              userId,
              nickname,
              userScore,
              desc,
              portrait,
            },
            i
          ) => {
            let rank = i + 1;
            var totalBeans;
            var text = prev ? "Won: " : "Est: ";

            if (rank === 1) {
              let cal = (estReward * 40) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 2) {
              let cal = (estReward * 30) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 3) {
              let cal = (estReward * 10) / 100;
              totalBeans = text + parseInt(cal);
            }
            return (
              <TopRank
                talent={talent}
                userId={userId}
                level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                name={nickname}
                rank={rank}
                avatar={portrait ? portrait : ''}
                score={userScore}
                estReward={estReward && totalBeans}
                frame={
                  rank === 1
                    ? frameOne
                    : rank === 2
                      ? frameTwo
                      : rank === 3
                        ? frameThree
                        : null
                }
              />
            );
          }
        )}
        <div className="rest-rankk fancyScroll">
          {data.length > 0 ? (
            restData?.map(
              (
                {
                  actorLevel,
                  userLevel,
                  userId,
                  nickname,
                  userScore,
                  desc,
                  portrait,
                },
                i
              ) => {
                let rank = i + 4;

                var totalBeans;
                var text = prev ? "Won: " : "Est: ";
                if (rank === 4) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                } else if (rank === 5) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                }
                return (
                  <RestRank
                    userId={userId}
                    level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                    name={nickname}
                    avatar={portrait ? portrait : ''}
                    rank={rank}
                    score={userScore}
                    talent={talent}
                    estReward={estReward && totalBeans}
                  />
                );
              }
            )
          ) : (
            <span className="flexCenter mrtop">No Record Found</span>
          )}
        </div>
      </div> */}
      {data.length > 10 && (
        <img
          className="seemore-btn mt-150"
          src={dataLength === 10 ? seemorebtn : seelessbtn}
          onClick={changeSeeBtn}
        />
      )}
    </div>
  );
}

export default OverAll;