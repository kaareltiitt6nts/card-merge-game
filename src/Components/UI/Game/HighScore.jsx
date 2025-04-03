import React, { useState, useContext } from "react";
import PlayerDataContext from "../../../Data/PlayerDataContext";
import { ranksToValue } from "../../../Utils/Utils";

const HighScore = () => {
  const { playerData } = useContext(PlayerDataContext);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [playerName, setPlayerName] = useState(playerData.name || "");
  const [playerKey, setPlayerKey] = useState("")

  return (
    <div className="text-center p-4">
      <h3>Leaderboard</h3>
      <ul>
        {/* Siia tuleb dünaamiline andmete laadimine */}
        <li>#1 PlayerOne - 100pts</li>
        <li>#2 PlayerTwo - 95pts</li>
        <li>#3 PlayerThree - 90pts</li>
        {/* Kasutaja koht */}
        {playerData.rank > 10 && (
          <li className="mt-2 font-bold">#{playerData.rank} {playerData.name || "You"} - {playerData.highestCardCount}pts</li>
        )}
      </ul>
    </div>
  );
};

export default HighScore;
