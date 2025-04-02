import { useEffect, useReducer, useState } from "react";
import "./App.css";
import PlayerDataContext from "./Data/PlayerDataContext";
import RankArea from "./Components/UI/Game/RankArea";
import RankSuitCount from "./Components/UI/Game/RankSuitCount";
import RankSuitCountBig from "./Components/UI/Game/RankSuitCountBig"
import MergeGet from "./Components/UI/Game/MergeGet";
import { getRandomSuit, getNextRank, suits } from "./Utils/Utils";
import Navbar from "./Components/Nav/Navbar";

const actionTypes = {
  INPUT_GET: "INPUT_GET",
  INPUT_MERGE: "INPUT_MERGE",
  INPUT_SET_RANK: "INPUT_SET_RANK",
  ACTION_DATA_LOADED: "ACTION_DATA_LOADED"
};

const gameReducer = (state, action) => {
  const randomSuit = getRandomSuit();
  const nextRank = getNextRank(state.selectedRank);
  const clone = structuredClone(state);

  switch (action.type) {
    case actionTypes.INPUT_GET:
      clone.cards["two"][randomSuit] += 1;
      return clone;
    case actionTypes.INPUT_MERGE:
      let canMerge = true;
      for (const suit of suits) {
        if (clone.cards[state.selectedRank][suit] < 1) {
          canMerge = false;
          break;
        }
      }
      if (canMerge && nextRank) {
        for (const suit of suits) {
          clone.cards[state.selectedRank][suit] -= 1;
        }
        const nextRankRandomSuit = getRandomSuit();
        clone.cards[nextRank][nextRankRandomSuit] += 1;
      }
      return clone;
    case actionTypes.INPUT_SET_RANK:
      clone.selectedRank = action.rank;
      return clone;
    case actionTypes.ACTION_DATA_LOADED:
      return action.data
    default:
      return clone;
  }
};

const defaultPlayerData = {
  id: 0,
  key: "asd",
  name: "",
  cards: {
    two: { heart: 0, diamond: 0, spade: 0, club: 0 },
    three: { heart: 0, diamond: 0, spade: 0, club: 0 },
    four: { heart: 0, diamond: 0, spade: 0, club: 0 },
    five: { heart: 0, diamond: 0, spade: 0, club: 0 },
    six: { heart: 0, diamond: 0, spade: 0, club: 0 },
    seven: { heart: 0, diamond: 0, spade: 0, club: 0 },
    eight: { heart: 0, diamond: 0, spade: 0, club: 0 },
    nine: { heart: 0, diamond: 0, spade: 0, club: 0 },
    ten: { heart: 0, diamond: 0, spade: 0, club: 0 },
    jack: { heart: 0, diamond: 0, spade: 0, club: 0 },
    queen: { heart: 0, diamond: 0, spade: 0, club: 0 },
    king: { heart: 0, diamond: 0, spade: 0, club: 0 },
    ace: { heart: 0, diamond: 0, spade: 0, club: 0 },
  },
  selectedRank: "two"
};

function App() {
  const [playerData, dispatchGameEvent] = useReducer(gameReducer, defaultPlayerData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5173/api/get-player-data?key=test`)
        const data = await response.json()

        if (response.status === 404) { 
          dispatchGameEvent({type: actionTypes.ACTION_DATA_LOADED, data: defaultPlayerData})
          localStorage.setItem("playerKey", "")
        }
        else {
          dispatchGameEvent({type: actionTypes.ACTION_DATA_LOADED, data: data})
        }
      } catch (error) {
        console.error("Failed to fetch data" + error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {playerData === null ? <p className="text-white">Loading...</p> :
      <PlayerDataContext.Provider value={{ playerData, dispatchGameEvent }}>
        <Navbar />
        {/* <HighScore /> */}
        <RankArea />
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col items-center gap-1 -translate-y-30 md:-translate-y-15">
            <RankSuitCount selectedRank={playerData.selectedRank} />
            <MergeGet />
          </div>
          <div className="absolute w-full bottom-0 translate-y-2 flex justify-center">
            <RankSuitCountBig selectedRank={getNextRank(playerData.selectedRank)} />
          </div>
        </div>
      </PlayerDataContext.Provider>
      }
    </>
  );
}

export default App;
