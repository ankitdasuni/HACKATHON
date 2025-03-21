import { atom } from "recoil";

export const tokenatom = atom({
  key: "tokenatom",
  default: localStorage.getItem("atoken") ? localStorage.getItem("atoken") : "",
});
