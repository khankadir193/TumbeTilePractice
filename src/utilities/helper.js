import unknown from "../assests/unknown.png";
import RewardSlider2 from "../components/carousel/RewardSlider2";
import { rewGet } from "./imageContext";

import { baseURL } from "./URL";

export const xtra = (input, count) => {
  if (input?.includes("bean bag") || input?.includes("Bean Bag")) {
    return `worth ${count} Beans`;
  } else if (input?.includes("Beans") || input?.includes("beans")) {
    return `x${count}`;
  } else if (input?.includes("gems") || input?.includes("Gems")) {
    return `x${count}`;
  } else if (input?.includes("xp") || input?.includes("XP")) {
    return `${count}`;
  } else {
    return `x${count <= 1 ? count + " day" : count + " days"}`;
  }
};
export const captureImageError = (event) => {
  event.target.src = unknown;
  return true;
};
export const wheelGame = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return {
    errorCode: 0,
    msg: "success",
    data: {
      firstLevel: randomNumber,
      rewardList: [
        {
          type: 1,
          count: 6000,
          desc: "Beans",
        },
        {
          type: 4,
          id: 1663,
          count: 12,
          desc: "Bumblebee Entrance",
        },
        {
          type: 4,
          id: 1664,
          count: 20,
          desc: "Phantom Entrance",
        },
        {
          type: 5,
          id: 112,
          count: 11,
          desc: "Ramadan Mubarak Room Skin",
        },
        {
          type: 5,
          id: 85,
          count: 13,
          desc: "FireBrand Room Skin",
        },
        {
          type: 5,
          id: 83,
          count: 7,
          desc: "Desert Knight Room Skin(New)",
        },
        {
          type: 6,
          id: 139,
          count: 7,
          desc: "Ignite Frame",
        },
        {
          type: 6,
          id: 31,
          count: 10,
          desc: "Ramadan Glory Frame",
        },
      ],
      itemInfo: [
        {
          index: 1,
          count: 25,
        },
        {
          index: 2,
          count: 28,
        },
        {
          index: 3,
          count: 39,
        },
        {
          index: 4,
          count: 7,
        },
      ],
    },
  };
};
export const drawGame = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return {
    errorCode: 0,
    msg: "success",
    data: {
      scores: randomNumber,
      rewardContent:
        "VIP x 1 day + 500 Beans + Victory Slide entrance x 2 days",
      rewardDTOList: [
        {
          type: 8,
          id: 100001,
          count: 1,
          desc: "VIP",
        },
        {
          type: 1,
          count: 500,
          desc: "Beans",
        },
        {
          type: 4,
          id: 1548,
          count: 2,
          desc: "Victory Slide entrance",
        },
      ],
    },
  };
};
export const bodyFixes = (check, scroll, set) => {
  if (check) {
    document.body.style.overflowY = "auto";
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("position");
    window.scrollTo(0, scroll);
  } else {
    set(window.pageYOffset);
    document.body.style.position = "fixed";
    // document.body.style.top = `${scroll}vw`;
    document.body.style.overflowY = "hidden";
  }
};
export function convertToPaginatedArray(flatArray, itemsPerPage) {
  const paginatedArray = [];

  for (let i = 0; i < flatArray.length; i += itemsPerPage) {
    const page = flatArray.slice(i, i + itemsPerPage);
    paginatedArray.push(page);
  }

  return paginatedArray;
}
export function createMarkup(markUp) {
  return { __html: markUp };
}

export const getLevelUrl = (talent, level) => {
  if (talent) {
    return baseURL + "/streamkar/common/img/tlv/" + level + ".png";
  } else {
    return baseURL + "/streamkar/common/img/ulv/" + level + ".png";
  }
};

export const blockInvalidChar = (e) => {
  if (["e", "E", "+", "-", "."].includes(e.key)) {
    e.preventDefault();
  }
};

export const checkShowData = (data, clas) => {
  const nestdata = convertToNestedArray(data);

  if (data.length > 2) {
    return (
      <RewardSlider2 smallSlider Infinite>
        {nestdata.map((x) => {
          return (
            <span className={clas}>
              {x?.map((d, i) => {
                return (
                  <span key={i} className={`${clas}-data`}>
                    <img src={rewGet(d?.desc)} />
                    <span className="color-primary">
                      {xtra(d?.desc, d?.count)}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </RewardSlider2>
    );
  } else {
    return (
      <span className={clas}>
        {data?.map((d, i) => {
          return (
            <span key={i} className={`${clas}-data`}>
              <img src={rewGet(d.desc)} />
              <span className="color-primary">
                {d.desc} {xtra(d.desc, d.count)}
              </span>
            </span>
          );
        })}
      </span>
    );
  }
};
export function convertToNestedArray(arr) {
  let nestedArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      nestedArray.push([arr[i], arr[i + 1]]);
    } else {
      nestedArray.push([arr[i]]);
    }
  }
  return nestedArray;
}
export const convertToTime = (time) => {
  let dateObject = new Date(time);
  return dateObject.toLocaleString("en-US", { timeZone: "GMT" });
};
export function getOrdinal(n) {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return ord;
}
export function circularText(
  className,
  text,
  radius,
  range,
  startPos,
  css,
  bottomCss
) {
  var textArr = text.split("");
  var deg = range / textArr.length;
  var newElement = "";
  textArr.forEach(function (ch) {
    ch =
      '<p style="height:' +
      radius +
      "vw;" +
      css +
      "; transform:rotate(" +
      startPos +
      "deg); left:50%;top:" +
      (radius / 2 - radius) +
      'vw; position:absolute; transform-origin:0 100%">' +
      '<span style="' +
      bottomCss +
      '">' +
      ch +
      "</span>" +
      "</p>";
    newElement = newElement + ch;
    startPos += deg;
  });
  return `<div class="${className}">${newElement}</div>`;
}
export function goTo(isLive, userId, roomId) {
  if (window.UA.android) {
    let url = "streamkar://m.streamkar.com/route";
    if (isLive) {
      url = url + "/room?roomId=" + roomId;
    } else {
      url = url + "/user?userId=" + userId;
    }
    if (userId || roomId) {
      window.phone.routeViewPage(url);
    }
  } else {
    window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
  }
}
