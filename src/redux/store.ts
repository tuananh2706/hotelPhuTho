import { configureStore } from '@reduxjs/toolkit';
import blogsApi from '~/apis/Blogs.api';
import JobApi from '~/apis/Jobs.api';

const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer,
        [JobApi.reducerPath]: JobApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogsApi.middleware, JobApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
