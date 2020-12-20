import {
  CREATE_BILL,
  FETCH_BILLS,
  FETCH_BILL,
  DELETE_BILL,
} from "../actions/types";
import _ from "lodash";

const INTIAL_STATE = {
  bills: [],
};

const BillsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BILL:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_BILLS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_BILL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BILL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default BillsReducer;
