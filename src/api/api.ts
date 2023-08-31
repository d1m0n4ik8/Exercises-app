import axios from 'axios'
import { IExercise, IExerciseData } from '../Interfaces/IExercise'
const API_KEY = '1Sj5fERgBiGUaWDVn6F8Rw==hutnfxkvof4yBk3V'

const URL = 'https://api.api-ninjas.com/v1/exercises'
export const getExercise = (params: IExercise) => {
	return axios.get<IExerciseData[]>(URL, { headers: { 'X-Api-Key': API_KEY }, params })
}
