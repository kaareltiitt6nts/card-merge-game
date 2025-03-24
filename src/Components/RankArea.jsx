import React, { useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

const RankArea = ({ setSelectedRank, setShownextRank  }) => {
  const playerData = useContext(PlayerDataContext);
  const ranks = Object.keys(playerData.cards);

  console.log(ranks);
  return (
    <>
      {ranks.map((rank,index) => (
        <Button
          key={rank}
          onClick={() => {
            console.log("clicked", rank);
            setSelectedRank(rank);
            //järgmise ranki kuvamiseks
            const nextIndex = (index + 1) % ranks.length;
            setShownextRank(nextIndex);
          }}
        >
          {rank}
        </Button>
      ))}
    </>
  );
};

export default RankArea;
