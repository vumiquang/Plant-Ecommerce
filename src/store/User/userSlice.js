import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from '../../firebase/auth';

const userSlice = createSlice({
    name: 'user',
    initialState: { isLogin: false, name: '', id: '', avatar: '' },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.avatar = action.payload.avatar;
        },
        logout: (state) => {
            state.isLogin = false;
            state.name = '';
            state.id = '';
            state.avatar = '';
           
        },
    },
});

export default userSlice;
