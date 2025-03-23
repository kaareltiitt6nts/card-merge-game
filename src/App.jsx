import { useState, useContext, createContext } from "react";
import "./App.css";
import GameContainer from "./Components/GameContainer";
import PlayerDataContext from "./Data/PlayerDataContext";

function App() {
  // selle abil valib, millised v22rtused RankSuitCount'is kuvab
  // kas peaks v2ltima useState() kasutamist?? 
  const [selectedRank, setSelectedRank] = useState("2");

  const data = {
    id: 0,
    key: "asd",
    name: "",
    cards: {
      2: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      3: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      4: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      5: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      6: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      7: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      8: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      9: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      T: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      J: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      Q: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      K: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      A: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
    },
  };

  return (
    <>
      <PlayerDataContext.Provider value={data}>
        <GameContainer
          selectedRank={selectedRank}
          setSelectedRank={setSelectedRank}
        />
      </PlayerDataContext.Provider>
    </>
  );
}

export default App;
