import { ActionType } from "../action-types";

export type bankAction = {
  type: ActionType.DEPOSIT | ActionType.WITHDRAW | ActionType.BANKRUPT;
  payload?: number;
};
