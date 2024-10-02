import { SET_REPEAT, SET_WAIT } from "./eventtypes";

export const setRepeat = (repeat_val) => {
  return {
    type: SET_REPEAT,
    value: repeat_val,
  };
};

export const setWait = (wait_val) => {
  return {
    type: SET_WAIT,
    value: wait_val,
  };
};
