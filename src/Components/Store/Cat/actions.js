import { GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_ERROR } from "./constants";

export const getCatRequestAction = () => ({
  type: GET_CAT_REQUEST,
});

export const getCatSuccessAction = (catUrl) => ({
  type: GET_CAT_SUCCESS,
  payload: catUrl,
});

export const getCatErrortAction = () => ({
  type: GET_CAT_ERROR,
});

export const getCatActionWithThunk = () => async (dispatch, getState) => {
  dispatch(getCatRequestAction());
  try {
    const response = await fetch("https://aws.random.cat/meow");

    if (!response.ok) {
      throw new Error(`error getting data with status`);
    }
    const result = await response.json();
    dispatch(getCatSuccessAction(result.file));
  } catch (error) {
    dispatch(getCatErrortAction);
  }
};
