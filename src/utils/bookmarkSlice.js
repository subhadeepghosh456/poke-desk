import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name: "bbokMark",
    initialState: {
        items: []
    },

    reducers: {
        addItems: (state, actions) => {
            state.items.push(actions.payload)
        },
        deleteItems: (state, actions) => {
           state.items =  state.items.filter((item)=>item.id !==actions.payload )
        }
    }
    
});

export const { addItems,deleteItems } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;