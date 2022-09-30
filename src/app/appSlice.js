import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  openSidebar: false,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.openSidebar = !state.openSidebar
    }
  }
})

export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer