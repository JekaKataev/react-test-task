import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Square {
  id: number;
  color: string;
}

interface SquaresState {
  squares: Square[];
  nextId: number;
}

const initialState: SquaresState = {
  squares: [],
  nextId: 0,
};

const squaresSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    addSquare: (state) => {
      const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      state.squares.unshift({ id: state.nextId, color });
      state.nextId += 1;
    },
    removeSquare: (state) => {
      state.squares.pop();
    },
  },
});

export const { addSquare, removeSquare } = squaresSlice.actions;
export default squaresSlice.reducer;