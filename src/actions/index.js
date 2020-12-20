import bills from "../apis/bills";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BILL,
  FETCH_BILLS,
  FETCH_BILL,
  DELETE_BILL,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createBill = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await bills.post("/bills", { ...formValues, userId });

  dispatch({ type: CREATE_BILL, payload: response.data });
};

export const fetchBills = () => async (dispatch) => {
  const response = await bills.get("/bills");

  dispatch({ type: FETCH_BILLS, payload: response.data });
};

export const fetchBill = (id) => async (dispatch) => {
  const response = await bills.get(`/bills/${id}`);

  dispatch({ type: FETCH_BILL, payload: response.data });
};

export const deleteBill = (id) => async (dispatch) => {
  await bills.delete(`/bills/${id}`);

  dispatch({ type: DELETE_BILL, payload: id });
};
