import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: {
    suscribe: 0,
    direction: "",
  },
  second: {
    suscribe: 0,
    direction: "",
  },
  third: {
    suscribe: 0,
    direction: "",
  },
  // Mobile-only extra slide inserted after #third (see
  // components/resultsSection/resultsStoriesSection.tsx). Needs its own
  // entry here since fullpage.js's onLeave dispatches this anchor name
  // whenever it becomes the active/destination slide on mobile.
  "third-next": {
    suscribe: 0,
    direction: "",
  },
  fourth: {
    suscribe: 0,
    direction: "",
  },
};

const FullpageSlice = createSlice({
  name: "fullpage",
  initialState,
  reducers: {
    setActiveSlide: (
      state,
      {
        payload,
      }: { payload: [anchor: keyof typeof initialState, direction: string] }
    ) => {
      const [anchor, direction] = payload;

      return {
        ...state,
        [anchor]: { suscribe: (state[anchor]?.suscribe ?? 0) + 1, direction },
      };
    },
  },
});

export const { setActiveSlide } = FullpageSlice.actions;

export default FullpageSlice.reducer;
