import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c1c06278ee6418f9054f4806c092d32",
  },
});
