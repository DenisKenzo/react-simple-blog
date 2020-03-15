import axios from "axios";
import {baseUrl} from './base-url'


export const addPostRequest = post => axios.post(`${baseUrl}/posts`, post);
