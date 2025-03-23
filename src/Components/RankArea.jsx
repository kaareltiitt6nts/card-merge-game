import React, { useContext } from "react";
import PlayerDataContext from "../Data/PlayerDataContext";
import Button from "./Button";

const RankArea = () => {
  const playerData = useContext(PlayerDataContext);
  const ranks = []
  for (const rank in playerData.cards) {
    ranks.push(rank);
  }
  console.log(ranks)
  return (
    <>
      {ranks.map((rank) => (
        <Button key={rank}>{rank}</Button>
      ))}
    </>
  );
};

export default RankArea;
