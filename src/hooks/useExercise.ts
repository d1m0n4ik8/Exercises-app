import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IExercise } from '../Interfaces/IExercise'
import { getExercise } from '../api/api'

export const useExercise = (values: IExercise) => {
	const navigate = useNavigate()
	return useQuery(['exercise'], () => getExercise(values), {
		select: data => data.data,
		enabled: false,
		onSuccess: data => {
			navigate('/exercises', { state: data })
		},
		onError: (err: AxiosError) => err,
	})
}
