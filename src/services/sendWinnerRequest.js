/** Absolute imports */
import axios from "axios";

const baseUrl = 'https://starnavi-frontend-test-task.herokuapp.com';

export const sendWinnerRequest = data => axios.post(`${baseUrl}/winners`, data);
