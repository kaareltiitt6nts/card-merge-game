import React, { useState, useContext } from "react";
import PlayerDataContext from "../Data/PlayerDataContext";
import { ranksToValue } from "../Utils/Utils";

const HighScore = () => {
  const { playerData } = useContext(PlayerDataContext);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [playerName, setPlayerName] = useState(playerData.name || "");
  const [playerKey, setPlayerKey] = useState("")

  const handleSave = async () => {
    if (!playerName.trim()) return;
    
    // sellest ei saanud jagu. idee oli backend/data/test.json faili kirjutada "Save" nupule vajutades andmed.
    const response = await fetch("/api/save-player-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: playerKey, data: { ...playerData, name: playerName } }),
    });

    if (response.ok) {
      alert("Data saved successfully");
      localStorage.setItem("playerKey", playerKey)
      location.reload()
    } else {
      alert("Failed to save data");
    }
  };

  const handleLoad = async (playerKey) => {
    try {
      const response = await fetch(`/api/get-player-data?key=${playerKey}`)

      if (response.status === 200) {
        localStorage.setItem("playerKey", playerKey)
        location.reload()
      }
    } catch (error) {
      console.log(error)
      alert("Failed to load data")
    }
  }

  // Leia kõrgeima rank'iga kaart ja selle arv
  let highestRank = null;
  let highestCount = 0;

  for (const rank of Object.keys(playerData.cards)) {
    const totalCount = Object.values(playerData.cards[rank]).reduce((sum, count) => sum + count, 0);
    if (totalCount > 0) {
      highestRank = rank;
      highestCount = totalCount;
    }
  }

  return (
    <div className="text-center p-4">
      <div className="text-2xl font-bold">
        #{playerData.rank || "-"} 🏆 {highestRank ? `${ranksToValue(highestRank)} x${highestCount}` : "No cards yet"}
      </div>
      
      {/*
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowLeaderboard(true)}
      >
        Leaderboard
      </button>
      
      {showLeaderboard && (
        <div className="fixed inset-0 bg-neutral-950/75 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-3">Top 10 Leaderboard</h2>
            <ul>
              <li>#1 PlayerOne - 100pts</li>
              <li>#2 PlayerTwo - 95pts</li>
              <li>#3 PlayerThree - 90pts</li>
              {playerData.rank > 10 && (
                <li className="mt-2 font-bold">#{playerData.rank} {playerData.name || "You"} - {playerData.highestCardCount}pts</li>
              )}
            </ul>
            <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setShowLeaderboard(false)}>Close</button>
          </div>
        </div>
      )}*/}
      
      <div className="mt-4">
        <div className="flex flex-row justify-center mb-1 gap-1">
          <input 
            type="text" 
            value={playerKey} 
            onChange={(e) => setPlayerKey(e.target.value)} 
            placeholder="Enter key"
            className="p-2 rounded bg-white"
          />
          <input 
            type="text" 
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)} 
            placeholder="Enter name"
            className="p-2 rounded bg-white"
          />
        </div>
        <div className="flex gap-1 justify-center">
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSave}>
            Save
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => handleLoad(playerKey)}>
            Load
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighScore;
