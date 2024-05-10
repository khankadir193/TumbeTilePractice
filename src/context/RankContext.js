import React, { createContext, useContext, useEffect, useState } from "react";
import { getCallApi } from "../utilities/api";
import { UserContext } from "./UserContext";

const RankContext = createContext();
function RankProvider({ children }) {
  const { user } = useContext(UserContext);
  const cd = new Date();
  // Get the previous day
  const pd = new Date(cd);
  pd.setDate(cd.getDate() - 1);
  // Function to format a date in "YYYY-MM-DD" format
  const formatDate = (date) => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  // Format the current and previous dates
  const CurrentDate = formatDate(cd);
  const PreviousDate = formatDate(pd);
  // Get the current date in UTC
  const currentUTCDate = new Date();
  const currentUTCHour = currentUTCDate.getUTCHours();

  // Get the previous hour in UTC
  const previousUTCDate = new Date(currentUTCDate);
  previousUTCDate.setUTCHours(currentUTCHour - 1);

  // Function to format a number in two digits
  const formatTwoDigits = (number) => {
    return number.toString().padStart(2, "0");
  };

  // Format the current and previous UTC hours
  const CurrentUTCHour = parseInt(formatTwoDigits(currentUTCHour));
  const PreviousUTCHour = parseInt(
    formatTwoDigits(previousUTCDate.getUTCHours())
  );
  // user and talent
  const [userRank, setUserRank] = useState([]);
  const [talentRank, setTalentRank] = useState([]);
  // currrent
  const [dailyTodayUserRank, setDailyTodayUserRank] = useState([]);
  const [dailyPrevsUserRank, setDailyPrevsUserRank] = useState([]);
  const [dailyTodayTalentRank, setDailyTodayTalentRank] = useState([]);
  const [dailyPrevsTalentRank, setDailyPrevsTalentRank] = useState([]);
  // previous
  const [hourCurUserRank, setHourCurUserRank] = useState([]);
  const [hourPrevUserRank, setHourPrevUserRank] = useState([]);
  const [hourCurTalentRank, setHourCurTalentRank] = useState([]);
  const [hourPrevTalentRank, setHourPrevTalentRank] = useState([]);

  // rankIndex=6&rankType=2
  const [tickertap, setTickerTap] = useState([]);

  const [tickerRefresh, setTickerRefreshTap] = useState(true);

  const tickerTapRefresh = () => {
    setTickerRefreshTap(!tickerRefresh);
  };

  // USER RANK AND TALENT RANK
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=11&pageNum=1&pageSize=20`,
      "USERRANK"
    )
      .then((response) => {
        setUserRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20`,
      "TALENTRANK"
    )
      .then((response) => {
        setTalentRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  //Daily User
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${CurrentDate}`,
      "TABONERANK"
    )
      .then((response) => {
        setDailyTodayUserRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${PreviousDate}`,
      "TABONERANK"
    )
      .then((response) => {
        setDailyPrevsUserRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  //Daily Talent
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${CurrentDate}`,
      "TABONERANK"
    )
      .then((response) => {
        setDailyTodayTalentRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${PreviousDate}`,
      "TABONERANK"
    )
      .then((response) => {
        setDailyPrevsTalentRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  //Hourly User
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${
        CurrentDate + "_" + CurrentUTCHour
      }`,
      "TABONERANK"
    )
      .then((response) => {
        setHourCurUserRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${
        CurrentDate + "_" + PreviousUTCHour
      }`,
      "TABONERANK"
    )
      .then((response) => {
        setHourPrevUserRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  //Hourly Talent
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${
        CurrentDate + "_" + CurrentUTCHour
      }`,
      "TABONERANK"
    )
      .then((response) => {
        setHourCurTalentRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
    getCallApi(
      `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${
        CurrentDate + "_" + PreviousUTCHour
      }`,
      "TABONERANK"
    )
      .then((response) => {
        setHourPrevTalentRank(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  // Game Ticker Tap
  useEffect(() => {
    getCallApi(
      `/api/activity/eidF/getWinnerRankInfo?eventDesc=20240422_tile&rankIndex=1&pageNum=1&pageSize=20`,
      "TALENTRANK"
    )
      .then((response) => {
        setTickerTap(response?.data?.list || []);
      })
      .catch(() => {
        console.log("error");
      });
  }, [tickerRefresh]);

  return (
    <RankContext.Provider
      value={{
        userRank,
        talentRank,

        dailyTodayUserRank,
        dailyPrevsUserRank,
        dailyTodayTalentRank,
        dailyPrevsTalentRank,

        hourCurUserRank,
        hourPrevUserRank,
        hourCurTalentRank,
        hourPrevTalentRank,

        tickertap,

        tickerTapRefresh,

        CurrentDate,
        PreviousDate,

        CurrentHour: `${CurrentDate + "_" + CurrentUTCHour}`,
        PreviousHour: `${CurrentDate + "_" + PreviousUTCHour}`,
      }}
    >
      {children}
    </RankContext.Provider>
  );
}
export { RankContext, RankProvider };
