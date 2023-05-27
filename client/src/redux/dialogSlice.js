import { createSlice } from "@reduxjs/toolkit";

//intial state
const dialogSlice= createSlice({
name:'dialog',
initialState:{
    sideMenu:false,
    overlay:false,
    bodyScroll:false,
},
reducers:{
    showSideMenu:(state,action)=>{
        state.sideMenu=action.payload;
    },
    showOverlay:(state,action)=>{
        state.overlay=action.payload;
    },
    showScroll:(state,action)=>{
        state.bodyScroll=action.payload;
    },
    reset: (state)=>{
        state.overlay=false;
        state.bodyScroll=false;
    }
}
});
export const { showSideMenu, showOverlay,  showScroll, reset } =dialogSlice.actions;
export default dialogSlice.reducer;