import React, { useContext } from "react";
import PlayerDataContext from "../../../Data/PlayerDataContext";
import RankSuitItem from "./RankSuitItem";
import { ranksToValue, suitToIcon } from "../../../Utils/Utils";

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
    <div className="grid grid-cols-2 md:flex gap-1">
      {filteredCards.map((card, index) => (
        <RankSuitItem key={index} rank={ranksToValue(card.rank)} suit={suitToIcon(card.suit)} count={card.count} />
      ))}
    </div>
  )
}

export default RankSuitCount;