import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(rootReducer, initValue, enhancers);

export default store;
