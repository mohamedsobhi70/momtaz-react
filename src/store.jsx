import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/Searchslice';

const store = configureStore({
    reducer: {
        search: searchReducer
    }
});

export default store;