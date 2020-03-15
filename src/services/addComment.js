import axios from "axios";
import {baseUrl} from './base-url'

export const addCommentRequest = comment => axios.post(`${baseUrl}/comments`, comment);
