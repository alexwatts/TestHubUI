import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { fetchGroups } from '../groupAPI';

export interface GroupState {
  value: string[];
  selectedGroup: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: GroupState = {
  value:  [],
  selectedGroup: '',
  status: 'loading',
};

export const fetchGroupsAsync = createAsyncThunk(
  'groups/fetchGroups',
  async () => {
    const response = await fetchGroups();
    return response;
  }
);

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    changeGroup: (state, action) => {
      state.selectedGroup = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroupsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGroupsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // @ts-ignore
        state.value = action.payload
      });
  },
});


export const selectGroups = (state: RootState) => state.groups.value;
export const selectedGroup = (state: RootState) => state.groups.selectedGroup;
export const selectLoadingState = (state: RootState) => state.groups.status;

export default groupsSlice.reducer;