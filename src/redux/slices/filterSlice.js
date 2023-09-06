import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        property: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filters', 
    initialState,
    reducers: {
        setGategoryId(state, action) {
            state.categoryId = action.payload;
        },
    },
});

export const { setGategoryId } = filterSlice.actions;

export default filterSlice.reducer; 
