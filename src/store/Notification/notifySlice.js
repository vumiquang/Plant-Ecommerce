import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const notifySlice = createSlice({
    name: 'notify',
    initialState: [],
    reducers: {
        addNotify: (state, action) => {
            state.push({ id: v4(), content: action.payload.content ,type:action.payload.type});
        },
        removeNotify: (state, action) => {
            return state.filter((el) => el.id !== action.payload);
        },
    },
});

export default notifySlice;
