import { SUBMIT } from "./types";

export const submit = (text) => ({
  type: SUBMIT,
  payload: text,
});