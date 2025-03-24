import React, { useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

// //ala kus on merge ja get nupud
const MergeGet = () => {
  const playerData = useContext(PlayerDataContext);

  //genereerib suvalisele 2 suitile +1
  const getRandomTwo = () => {
    const suits = Object.keys(playerData.cards[2]);
    const randomSuits = [];
    const randomIndex = Math.floor(Math.random() * suits.length);
    const suit = suits[randomIndex];
    randomSuits.push(suit);

    const updatedCards = { ...playerData.cards };
    randomSuits.forEach((suit) => {
      updatedCards[2][suit] += 1;
    });

  
    //uuendab andmed ära
    playerData.updatePlayerData(updatedCards);
  };

  return (
    <div>
      <Button>Merge</Button>

      <Button onClick={getRandomTwo}>Get</Button>
    </div>
  );
};

export default MergeGet;
