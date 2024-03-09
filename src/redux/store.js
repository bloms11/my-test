import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { persistStore, persistReducer } from "redux-persist";
import todoReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["userInfo", "rememberMe"],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
