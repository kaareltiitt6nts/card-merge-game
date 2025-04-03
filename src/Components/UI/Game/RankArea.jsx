import React, { useContext } from "react";
import PlayerDataContext from "../../../Data/PlayerDataContext";
import { ranksToValue } from "../../../Utils/Utils";
import RankButton from "./RankButton";

const RankArea = () => {
  const {playerData, dispatchGameEvent} = useContext(PlayerDataContext);
  const ranks = Object.keys(playerData.cards)

  return (
      <div className="w-full flex justify-center">
        {ranks.map((rank, index) => (
          <RankButton
            key={rank}
            onClick={() => dispatchGameEvent({type: "INPUT_SET_RANK", rank: rank})}
            selected={playerData.selectedRank === rank}
          >
            {ranksToValue(rank)}
          </RankButton>
        ))}
      </div>
  )
}

export default RankArea;
