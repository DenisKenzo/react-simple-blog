import axios from "axios";
import {baseUrl} from './base-url'


export const deleteRequest = id => axios.delete(`${baseUrl}/posts/${id}`);
