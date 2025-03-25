import React, { useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

// //ala kus on merge ja get nupud
const MergeGet = ({ selectedRank }) => {
  const playerData = useContext(PlayerDataContext);

  const handleMerge = () => {
    if (!selectedRank) return;
    const suits = Object.keys(playerData.cards[selectedRank]);
    const canMerge = suits.every((suit) => playerData.cards[selectedRank] [suit] > 0);
    if (!canMerge) return;
    // eemaldab 1 igast suitist
    const updatedCards = { ...playerData.cards };
    suits.forEach((suit) => {
      updatedCards [selectedRank] [suit] -= 1;
    })

    //lisab järgmisele rankile 1x random suiti
    const rankKeys = Object.keys(updatedCards);
    const currentIndex = rankKeys.indexOf(selectedRank);
    if (currentIndex < rankKeys.length -1) {
      const nextRank = rankKeys[currentIndex + 1];
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      updatedCards [nextRank] [randomSuit] += 1;
    }
    playerData.updatePlayerData(updatedCards);
  };

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
    <div className="flex justify-center ">
      <Button onClick={handleMerge} >Merge</Button>

      <Button onClick={getRandomTwo}>Get</Button>
    </div>
  );
};

export default MergeGet;
