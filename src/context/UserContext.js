import React, { createContext, useEffect, useState } from "react";

import { getCallApi } from "../utilities/api";
import { bodyFixes } from "../utilities/helper";

const UserContext = createContext();
function UserProvider({ children }) {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("English");

  const changeLanguage = (language) => {
    setLanguage(language);
  };
  const userRefresh = () => {
    setRefresh(!refresh);
  };

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    head: null,
  });
  const [detailPopUp, setDetailPopUp] = useState({
    show: false,
    message: "",
    head: null,
  });

  const [guide, setGuide] = useState(false);
  const [leaderboard, setLeaderBoard] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [user, setUser] = useState({
    uid: 0,
    token: undefined,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const changeAlertPopUp = (show, message, head) => {
    bodyFixes(false, scrollPosition, setScrollPosition);
    setAlert({ show: show, message: message, head: head });
  };
  const closeAlertPopUp = () => {
    bodyFixes(true, scrollPosition, setScrollPosition);
    setAlert({ show: false, message: "", head: null });
  };
  const changeGuidePopUp = () => {
    bodyFixes(guide, scrollPosition, setScrollPosition);
    setGuide(!guide);
  };
  const changeDetailPopUp = (show, message, head) => {
    bodyFixes(false, scrollPosition, setScrollPosition);
    setDetailPopUp({ show: show, message: message, head: head });
  };
  const closeDetailPopUp = () => {
    bodyFixes(leaderboard ? false : true, scrollPosition, setScrollPosition);
    setDetailPopUp({ show: false, message: "", head: null });
  };
  const changeLeaderPopUp = () => {
    bodyFixes(leaderboard, scrollPosition, setScrollPosition);
    setLeaderBoard(!leaderboard);
  };

  useEffect(() => {
    // get user info
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          uid: userInfo.userId > 0 ? userInfo.userId : 0,
          token: userInfo.token != "" ? userInfo.token : null,
        });
      });
    } catch (_error) {
      setUser({
        uid: 596492374,
        token: "A16CDE143EEC9A486D94D8534155368927",
      });
      console.error("Can't get userInfo");
    }
  }, []);

  //USER INFORMATION
  useEffect(() => {
    // user information
    setLoading(true);
    if (user.uid > 0) {
      // window.alert(user.uid + " " + user.token);
      getCallApi(
        `/api/activity/tile/getUserEventInfo?userId=${user.uid}`,
        "USERINFO"
      )
        .then((response) => {
          setUserInfo(response?.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          console.log("error");
        });
    }
  }, [user, refresh]);

  // USERS RECORDS SEE MORE
  const [recordIndex, setRecordIndex] = useState(1);
  const updateRecordIndex = () => {
    setRecordIndex(recordIndex + 1);
  };
  //Records
  const [records, setRecords] = useState([]);

  //Records Refresh
  const [recordRefresh, setRecordRefresh] = useState([]);

  const updateRecodRefresh = () => {
    setRecordRefresh(!recordRefresh);
  };
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (user.uid > 0) {
      getCallApi(
        `/api/activity/eidF/getRecordInfo?eventDesc=20240422_tile&rankIndex=21&pageNum=${recordIndex}&pageSize=10&type=1&userId=${user.uid}`,
        "USERRANK"
      )
        .then((response) => {
          if (recordIndex >= 2) {
            setRecords((prev) => [...prev, response?.data?.list]);
          } else {
            setRecords([response?.data?.list]);
          }
          setPageCount(response?.data?.pageCount);
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, [user, recordIndex, recordRefresh]);

  return (
    <UserContext.Provider
      value={{
        user,
        records,
        userInfo,

        loading,
        setLoading,

        guide,
        changeGuidePopUp,
        leaderboard,
        changeLeaderPopUp,

        pageCount,
        recordIndex,

        detailPopUp,
        changeDetailPopUp,
        closeDetailPopUp,

        alert,
        changeAlertPopUp,
        closeAlertPopUp,

        language,
        changeLanguage,

        userRefresh,

        updateRecordIndex,
        updateRecodRefresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
