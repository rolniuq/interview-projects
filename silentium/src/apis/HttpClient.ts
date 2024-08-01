import axios from 'axios';
import {Base_Url} from './Constants';

export const httpClient = axios.create({
  baseURL: Base_Url,
  timeout: 5000,
});
