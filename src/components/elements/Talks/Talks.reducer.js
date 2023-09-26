import { hasValues } from "./Talks.utils";

const INITIAL_STATE = {
  talks: [],
  initialTalks: [],
  filters: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "title":
    case "author":
    case "event":
    case "format":
    case "ressource":
      const filters = { ...state.filters, [action.type]: action.payload };
      let talks = state.initialTalks;
      for (const [key, values] of Object.entries(filters)) {
        talks = talks.filter((talk) => hasValues(values, talk, key));
      }
      return {
        talks,
        initialTalks: state.initialTalks,
        filters: state.filters,
      };
    case "init":
      return {
        talks: action.payload,
        initialTalks: action.payload,
        filters: {},
      };
    default:
      return state;
  }
};

export default reducer;
