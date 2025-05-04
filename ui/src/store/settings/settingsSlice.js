import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showminimap: true,
  showinfo: false,
  minimapsize: 50,
  playerstatus: false,
  speedometersize: 50,
  dynamicinfo: true,
  seatbeltalarm: true,
  showstreet: true,
  showhud: true,
  showcompass: true,
  cinematicmode: false,
  mphkmh: false,
  skullonfoot: false,
  showspeedometer: true,
  compassize: 50,
  fliphud: false,
};


export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    update: (state, action) => {
      return action.payload
    }
  },
});

export const { update } = settingsSlice.actions;

export default settingsSlice.reducer;
