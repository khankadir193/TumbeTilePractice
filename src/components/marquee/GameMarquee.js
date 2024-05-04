import React from "react";
import SingleMarquee from "./SingleMarquee";
import Marquee from "react-fast-marquee";

export default function GameMarquee({ data, page }) {
  return (
    <div className="game-marquee">
      {data?.length > 0 && (
        <Marquee gradient={false} speed={80}>
          {data?.map((d, i) => (
            <SingleMarquee
              key={i}
              page={page}
              ranking={i + 1}
              image={d?.portrait}
              score={d.userScore}
              userId={d.userId}
              name={d?.nickname}
              description={d?.desc ? JSON.parse(d?.desc) : null}
            />
          ))}
        </Marquee>
      )}
    </div>
  );
}
