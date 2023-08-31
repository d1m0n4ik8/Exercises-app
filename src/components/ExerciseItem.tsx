import { FC } from 'react'
import { IExerciseData } from '../Interfaces/IExercise'
type propsType = {
	exercise: IExerciseData
}
const ExerciseItem: FC<propsType> = ({ exercise }) => {
	return (
		<>
			<div className='w-full md:w-1/2 rounded-lg bg-stone-700 shadow-xl text-lg p-4'>
				<div className='flex justify-between border-b-2 border-stone-800 px-6 py-3 text-white'>
					<p className='text-2xl'>{exercise.name}</p>
					<p className='bg-purple-900 text-purple-300 font-medium mr-2 px-2.5 py-0.5 rounded text-md'>
						{exercise.difficulty}
					</p>
				</div>
				<div className='p-3'>
					<p>Type: {exercise.type}</p>
					<p>Muscle: {exercise.muscle}</p>
					<p>Equipment: {exercise.equipment}</p>
					<p>Instructions:</p>
					<p className='text-justify'>{exercise.instructions}</p>
				</div>
			</div>
		</>
	)
}

export default ExerciseItem
