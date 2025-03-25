import React, { useContext } from "react";
import PlayerDataContext from "../Data/PlayerDataContext";
import RankSuitDisplay from "./RankSuitDisplay";

const RankSuitCount = ({ selectedRank }) => {
  const playerData = useContext(PlayerDataContext);

  const cardData = Object.keys(playerData.cards)
    .map((cardRank) => {
      return Object.keys(playerData.cards[cardRank]).map((suit) => ({
        suit,
        rank: cardRank,
        count: playerData.cards[cardRank][suit],
      }));
    })
    .flat();

  const filteredCards = cardData.filter((card) => card.rank === selectedRank);
  
  return (
    <div className="flex justify-center p-10">
      {filteredCards.map((card, index) => (
        <RankSuitDisplay rank={card.rank} suit={card.suit} count={card.count} />
      ))}
    </div>
  );
};

export default RankSuitCount;