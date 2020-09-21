import axios from "axios";

export const fetchComments = async () => {
	return await axios.get("https://jsonplaceholder.typicode.com/comments");
};
