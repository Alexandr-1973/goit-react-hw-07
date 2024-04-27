import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://662d06190547cdcde9dfbf53.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  `contacts/fetchAll`,
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/contacts");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
//   async (_, thunkApi) => {
//     try {
//       const res = await axios.get("/contacts");
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
//   async (_, thunkApi) => {
//     try {
//       const res = await axios.get("/contacts");
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
);
