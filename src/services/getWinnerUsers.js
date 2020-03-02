/** Absolute imports */
import axios from "axios";

const baseUrl = 'https://starnavi-frontend-test-task.herokuapp.com';

export const getWinnersRequest = () => axios.get(`${baseUrl}/winners`);
