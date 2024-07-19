import  { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: (state, action) => {
      // Ensure the payload contains both name and message properties
      state.messages.slice(40,1)
      // Push the new message to the messages array
      state.messages.push(action.payload);
    },
  },
});

export const { setMessage } = ChatSlice.actions;
export default ChatSlice.reducer;

