import axios from "axios";
import {baseUrl} from './base-url'

export const getPostsRequest = () => axios.get(`${baseUrl}/posts`);
