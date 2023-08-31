import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IExerciseData } from '../Interfaces/IExercise'
import ExerciseItem from '../components/ExerciseItem'

const Exercises: FC = () => {
	const { state } = useLocation()

	return (
		<div className='h-full p-8'>
			<Link
				to='/'
				type='submit'
				className=' text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-lg px-5 py-2 text-center'>
				⪻ Back
			</Link>
			<div className='flex flex-col items-center space-y-5'>
				{state?.length ? (
					state.map((exercise: IExerciseData) => <ExerciseItem exercise={exercise} key={exercise.name} />)
				) : (
					<div className='flex justify-center'>
						<img className='w-1/3' src='https://hajde.media/img/no-results.png' alt='empty' />
					</div>
				)}
			</div>
		</div>
	)
}

export default Exercises
