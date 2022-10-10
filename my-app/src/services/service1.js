import axios from "axios";

export const getPosts1 = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

/**
 * @param {number} index
 */
export function getPosts(index) {
  return axios.get(
    "https://jsonplaceholder.typicode.com/todos/" + index.toString()
  );
}
