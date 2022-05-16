import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    plantCollection,
    getCollection,
    updateCollection,
} from '../../firebase/util';
const productSlice = createSlice({
    name: 'product',
    initialState: { status: '', products: [] },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        changeCount: (state, action) => {
            state.products.forEach((el) => {
                if (el.id === action.payload.id) {
                    el[action.payload.size] =
                        el[action.payload.size] - Number(action.payload.count);
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.status = 'finish';
                state.products = action.payload;
            })
            .addCase(getAllProduct.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(changeCountProduct.fulfilled, (state, action) => {
                state.products = state.products.map((el) => {
                    if (el.id === action.payload.id) {
                        el[action.payload.size] = action.payload.count;
                    }
                    return el;
                });
            });
    },
});

export const getAllProduct = createAsyncThunk(
    'product/getProducts',
    async () => {
        const res = await getCollection(plantCollection);
        return res;
    }
);

export const changeCountProduct = createAsyncThunk(
    'product/changeCountProduct',
    async (data, { getState }) => {
        const products = getState().products.products;
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === data.id) {
                total = Number(products[i][data.size]);
                break;
            }
        }
        total = total + data.count;
        await updateCollection('plant', data.id, { [data.size]: total });
        return { ...data, count: total };
    }
);

export default productSlice;
