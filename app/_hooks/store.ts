import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "../_features/appSlices/apiSlice";
import userReducer from "../_features/appSlices/userSlice";
import { adminApi } from "../_features/appSlices/adminSlice";

// Configure Persist
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

// Combine Reducers
const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	userReducer,
	[adminApi.reducerPath]: adminApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware,
			adminApi.middleware
		),
});

// Persistor for hydrating state
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
