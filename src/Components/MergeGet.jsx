import React, { useCallback, useContext } from "react";
import Button from "./Button";
import PlayerDataContext from "../Data/PlayerDataContext";

// //ala kus on merge ja get nupud
const MergeGet = ({ selectedRank }) => {
  const {playerData, dispatchGameEvent} = useContext(PlayerDataContext);

  const handleGet = useCallback(() => {
    dispatchGameEvent({type: "INPUT_GET"})
  }, [dispatchGameEvent])

  const handleMerge = useCallback(() => {
    dispatchGameEvent({type: "INPUT_MERGE"})
  }, [dispatchGameEvent])

  return (
    <div className="flex justify-center ">
      <Button onClick={handleMerge}>Merge</Button>
      <Button onClick={handleGet}>Get</Button>
    </div>
  );
};

export default MergeGet;
