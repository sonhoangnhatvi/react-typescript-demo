import { bankAction } from "../actions";
import { ActionType } from "../action-types";

type bankState = {
  accountBalance: number;
};

const initialState: bankState = {
  accountBalance: 0,
};

const bankReducer = (
  state: bankState = initialState, // Sử dụng giá trị mặc định initialState cho state nếu không có giá trị được truyền vào
  { type, payload }: bankAction
) => {
  switch (type) {
    case ActionType.DEPOSIT:
      return {
        ...state,
        accountBalance: state.accountBalance + (payload ?? 0),
      }; // Trả về một đối tượng mới thay vì sửa đổi trực tiếp state
    case ActionType.WITHDRAW:
      return {
        ...state,
        accountBalance: state.accountBalance - (payload ?? 0),
      }; // Trả về một đối tượng mới thay vì sửa đổi trực tiếp state
    case ActionType.BANKRUPT:
      return { ...state, accountBalance: 0 }; // Trả về một đối tượng mới thay vì sửa đổi trực tiếp state
    default:
      return state;
  }
};

export default bankReducer;
