import { SELECT_TAB, NEXT_TAB } from "./types";

export const selectTab = data => ({
  type: SELECT_TAB,
  payload: data
});

export const nextTab = data => ({
  type: NEXT_TAB,
  payload: data
});
