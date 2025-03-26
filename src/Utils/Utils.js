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

export const ranksToValue = (rank) => {
  switch (rank) {
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    case "ten":
      return "10";
    case "jack":
      return "J";
    case "queen":
      return "Q";
    case "king":
      return "K";
    case "ace":
      return "A";
    default:
      return;
  }
};

export const suitToIcon = (suit) => {
  switch (suit) {
    case "heart":
      return "♥️";
    case "diamond":
      return "♦️";
    case "spade":
      return "♠️";
    case "club":
      return "♣️";
    default:
      return;
  }
};
