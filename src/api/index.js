import axios from "axios";

export const instance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/RockaHelller/FlashcardDatabase/",
  baseURL: "http://localhost:3000/",
});
