import { SUBMIT } from "./types";
    const INIT_STATE = {
      text: null,
    };

    const reducer = (state = INIT_STATE, action) => {
      if (action.type === SUBMIT) {
        return {
          text: action.payload,
        };
      } else {
        return state; //provide the default action to return state which redux uses when initialization
      }
    };

    export default reducer;