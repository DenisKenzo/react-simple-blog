import axios from "axios";
import {baseUrl} from './base-url'


export const getCommentsRequest = id => axios.get(`${baseUrl}/posts/${id}?_embed=comments`);
