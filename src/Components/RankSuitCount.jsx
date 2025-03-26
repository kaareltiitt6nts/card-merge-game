import React, { useContext } from "react";
import PlayerDataContext from "../Data/PlayerDataContext";
import RankSuitDisplay from "./RankSuitDisplay";
import { ranksToValue, suitToIcon } from "../Utils/Utils";

const RankSuitCount = ({ selectedRank }) => {
  const {playerData, dispatchGameEvent} = useContext(PlayerDataContext);

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
        <RankSuitDisplay rank={ranksToValue(card.rank)} suit={suitToIcon(card.suit)} count={card.count} />
      ))}
    </div>
  );
};

export default RankSuitCount;