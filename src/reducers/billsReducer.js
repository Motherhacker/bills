import {
  CREATE_BILL,
  FETCH_BILLS,
  FETCH_BILL,
  EDIT_BILL,
  DELETE_BILL,
  SIGN_OUT,
} from "../actions/types";
import _ from "lodash";

const INTIAL_STATE = {
  bills: [],
};

const BillsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BILL:
    case EDIT_BILL:
    case FETCH_BILL:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_BILLS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_BILL:
      return _.omit(state, action.payload);
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export default BillsReducer;
