import { atom } from "recoil";

const favoritesState = atom({
  key: "favoritesState",
  default: [],
});

export default favoritesState;
