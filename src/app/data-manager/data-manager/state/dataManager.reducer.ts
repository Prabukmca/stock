export function reducer(state, action) {
  switch (action.type) {
    case "UNSAVED_CHANGES_DETECTED":
      return {
        ...state,
        showDialog: action.payload
      };
    case "ADD_TAB":
      return {
        ...state,
        tab: action.payload
      };
    default:
      return state;
  }
}
