import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { fetchResults } from '../resultAPI';
import {DisplayResult} from "../types";

export interface ResultsState {
  value: DisplayResult[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ResultsState = {
  value:  [{ group: "init", rows:[ { name: "header", columns: []}] }],
  status: 'loading',
};

export const fetchResultsAsync = createAsyncThunk(
      'results/fetchResults',
      async (groups: string[]) => {
        const response = await fetchResults(groups);
        return response
      }
  );

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResultsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResultsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // @ts-ignore
        state.value = action.payload
      });
  },
});

export const selectResults = (state: RootState) => state.displayResult.value;
export const selectLoadingState = (state: RootState) => state.displayResult.status;

export default resultsSlice.reducer;