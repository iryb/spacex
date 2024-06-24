import { atom } from "recoil";

const favoritesState = atom({
  key: "favoritesState",
  default: [] as string[],
});

export default favoritesState;
