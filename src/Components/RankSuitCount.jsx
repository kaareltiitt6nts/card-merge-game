import React, { useContext } from "react";
import PlayerDataContext from "../Data/PlayerDataContext";
import Button from "./Button";

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
    <div className="flex justify-center p-10 ">
      {filteredCards.map((card, index) => (
        <div key={index} className="border-2 p-5 m-3 bg-white rounded-xl">
          <span className="text-2xl">{card.suit}</span>
          <span className="ml-2 text-xl">{card.rank}</span>
          <span className="ml-2 text-sm">x{card.count}</span>
        </div>
      ))}
    </div>
  );
};

export default RankSuitCount;
