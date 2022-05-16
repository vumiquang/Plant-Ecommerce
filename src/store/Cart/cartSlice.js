import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import {
    addCollection,
    cartCollection,
    deleteCollection,
    getCollectionBy,
    updateCollection,
} from '../../firebase/util';
// {
// id:"",
//     count: 5,
//     plantid: 'qwewqeqw',
//     price: 100000,
//     size: 'small',
//     userid: 'quang',
//     img: 'https://firebasestorage.googleapis.com/v0/b/plant-55f62.appspot.com/o/kim-thuy-tung-1.png?alt=media&token=8f11fb38-6d31-46b4-a83b-3ef48d796f3f',
//     name: 'cayluoiho',
// }
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        resetCart: (state, action) => {
            return [];
        },
        addCart: (state, action) => {
            state.push(action.payload);
        },
        removeCart: (state, action) => {
            return state.filter((el) => el.id !== action.payload);
        },

        updateCountCart: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (
                    state[i].id === action.payload.id &&
                    state[i].count !== -1 * action.payload.count
                ) {
                    state[i].count += action.payload.count;
                    break;
                }
            }
        },
        removeAllCart: (state, action) => {
            return [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCart.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addNewCart.fulfilled, (state, action) => {
                let isExistTree = false;
                for (let i = 0; i < state.length; i++) {
                    if (
                        state[i].plantid === action.payload.plantid &&
                        state[i].size === action.payload.size
                    ) {
                        state[i].count += action.payload.count;
                        isExistTree = true;
                        break;
                    }
                }

                if (!isExistTree) state.push(action.payload);
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                return state.filter((el) => el.id !== action.payload);
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                for (let i = 0; i < state.length; i++) {
                    if (state[i].id === action.payload.id) {
                        state[i].count = action.payload.count;
                        break;
                    }
                }
            });
    },
});

export const getAllCart = createAsyncThunk(
    'cart/getAllCart',
    async (userid) => {
        const res = await getCollectionBy(cartCollection, 'userid', userid);
        return res;
    }
);

export const addNewCart = createAsyncThunk(
    'cart/addNewCart',
    async (data, { getState }) => {
        const carts = getState().cart;
        for (let i = 0; i < carts.length; i++) {
            const cart = carts[i];
            if (cart.plantid === data.plantid && cart.size === data.size) {
                const newCount = Number(cart.count) + Number(data.count);
                await updateCollection('cart', cart.id, {
                    [cart.size]: newCount,
                });
                return { ...data, id: cart.id };
            }
        }

        const id = await addCollection(
            cartCollection,
            data,
            () => {},
            () => {}
        );
        return { ...data, id: id };
    }
);

export const deleteCart = createAsyncThunk('cart/deleteCart', async (id) => {
    await deleteCollection('cart', id);
    return id;
});

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async (id, count) => {
        await updateCollection('cart', id, { count: count });
        return { id, count };
    }
);

export default cartSlice;
