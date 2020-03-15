import axios from "axios";
import {baseUrl} from './base-url'

export const replacePost = (updatedPost, id) => axios.put(`${baseUrl}/posts/${id}`, updatedPost);
