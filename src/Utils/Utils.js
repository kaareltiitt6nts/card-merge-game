export const ranks = [
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
  "ace",
];
export const suits = ["heart", "diamond", "spade", "club"];

export const getRandomSuit = () => suits[Math.floor(Math.random() * suits.length)];
export const getNextRank = (rank) => ranks[ranks.indexOf(rank) + 1];
export const getRanks = () => ranks;
export const getSuits = () => suits;

