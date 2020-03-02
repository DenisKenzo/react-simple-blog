/** Absolute imports */
import axios from "axios";

const baseUrl = 'https://starnavi-frontend-test-task.herokuapp.com';

export const getGameSettingsRequest = () => axios.get(`${baseUrl}/game-settings`);
