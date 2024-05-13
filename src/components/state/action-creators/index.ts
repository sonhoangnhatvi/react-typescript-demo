import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { bankAction } from "../actions";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<bankAction>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const widthrawMoney = (amount: number) => {
  return (dispatch: Dispatch<bankAction>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<bankAction>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
