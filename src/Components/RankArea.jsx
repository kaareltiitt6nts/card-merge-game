import React, { useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

const RankArea = () => {
  const {playerData, dispatchGameEvent} = useContext(PlayerDataContext);
  const ranks = Object.keys(playerData.cards)

  return (
    <>
      <div className="border-1 border-neutral-100 rounded-xl">
        {ranks.map((rank, index) => (
          <Button 
            key={rank}
            onClick={() => dispatchGameEvent({type: "INPUT_SET_RANK", rank: rank})}
          >
            {rank}
          </Button>
        ))}
      </div>
    </>
  );
};

export default RankArea;
