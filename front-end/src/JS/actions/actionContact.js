import { GET_CONTACTS } from "../constants/actionsTypes";
import axios from "axios";

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/api/contacts", newContact)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
