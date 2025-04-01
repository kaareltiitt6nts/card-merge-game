import { useReducer } from "react";
import "./App.css";
import PlayerDataContext from "./Data/PlayerDataContext";
import RankArea from "./Components/RankArea";
import RankSuitCount from "./Components/RankSuitCount";
import MergeGet from "./Components/MergeGet";
import { getRandomSuit, getNextRank, suits } from "./Utils/Utils";
import HighScore from "./Components/HighScore";

const actionTypes = {
  INPUT_GET: "INPUT_GET",
  INPUT_MERGE: "INPUT_MERGE",
  INPUT_SET_RANK: "INPUT_SET_RANK",
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
    default:
      return clone;
  }
};

const mockPlayerData = {
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
};

function App() {
  const [playerData, dispatchGameEvent] = useReducer(gameReducer, {
    ...mockPlayerData,
    selectedRank: "two",
  });

  return (
    <>
      <PlayerDataContext.Provider value={{ playerData, dispatchGameEvent }}>
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="border-10 rounded-full border-y-green-800 border-green-950 p-30 bg-green-600 ">
            <HighScore />
            <RankArea />
            <RankSuitCount selectedRank={playerData.selectedRank} />
            <MergeGet />
            <RankSuitCount
              selectedRank={getNextRank(playerData.selectedRank)}
            />
          </div>
        </div>
      </PlayerDataContext.Provider>
    </>
  );
}

export default App;
