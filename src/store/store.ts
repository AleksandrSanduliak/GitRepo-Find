import { configureStore, combineReducers } from "@reduxjs/toolkit";
import repoSlice from "./repoSlice";
import { api } from "../services/api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const rootReducers = combineReducers({
  repoSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dispatchApp = useDispatch<AppDispatch>;
export const selectorApp = useSelector<RootState>;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
