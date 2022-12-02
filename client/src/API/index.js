import axios from 'axios';

const URL = 'http://localhost:8000/feed'

export const fetchPosts = ()=> axios.get(URL);