import React, { useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

const RankArea = ({ setSelectedRank }) => {
  const playerData = useContext(PlayerDataContext);
  const ranks = Object.keys(playerData.cards);

  /*   const ranks = []
  for (const rank in playerData.cards) {
    ranks.push(rank);
  } */
  console.log(ranks);
  return (
    <>
      {ranks.map((rank) => (
        <Button
          key={rank}
          onClick={() => {
            console.log("clicked", rank);
            setSelectedRank(rank);
          }}
        >
          {rank}
        </Button>
      ))}
    </>
  );
};

export default RankArea;
