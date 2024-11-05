import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

const api = axios.create({
	baseURL: BASE_URL,
	params: {
		key: API_KEY,
	},
})

export { api, BASE_URL }
