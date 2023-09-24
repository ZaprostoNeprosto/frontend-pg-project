import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
};
export var addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state, action) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
export var addCommentFormActions = addCommentFormSlice.actions;
export var addCommentFormReducer = addCommentFormSlice.reducer;
