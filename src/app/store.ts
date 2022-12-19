import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resultsReducer from '../features/results/store/resultSlice';
import groupsReducer from '../features/results/store/groupSlice';
import selectedGroupReducer from '../features/results/store/groupSlice';

export const store = configureStore({
  reducer: {
    displayResult: resultsReducer,
    groups: groupsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
