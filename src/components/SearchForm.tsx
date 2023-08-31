import { FC, FormEvent, useState } from 'react'
import Select from 'react-select'
import { difficultiesOptions, musclesOptions, typesOptions } from '../Interfaces/Exercise.options.ts'
import { IExercise } from '../Interfaces/IExercise.ts'
import { useExercise } from '../hooks/useExercise.ts'
import LoadingButton from './LoadingButton.tsx'

const defaultValues: IExercise = {
	name: '',
	type: '',
	muscle: '',
	difficulty: '',
}
const selectStyles = {
	control: () => 'bg-stone-700 border-stone-800 text-white text-white text-sm rounded-lg p-3 mt-3',
	menu: () => 'bg-stone-700 rounded-lg',
	option: () => 'text-white border border-stone-800 text-white text-sm p-3 hover:bg-stone-800',
	placeholder: () => 'text-gray-500',
}

const SearchForm: FC = () => {
	const [values, setValues] = useState(defaultValues)
	const { isLoading, refetch, error } = useExercise(values)
	const isValid = values.name || values.type || values.muscle || values.difficulty

	const changeHandler = (key: string, value: string) => {
		setValues({ ...values, [key]: value })
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		refetch()
	}

	return (
		<form onSubmit={submitHandler} className='w-full lg:w-1/2 shadow-2xl p-4 rounded-xl'>
			<div className='text-center my-4 text-3xl'>Search exercise</div>
			<input
				className='bg-stone-700 border border-stone-800 focus:outline-none
				 text-white text-sm rounded-lg focus: border-none focus:border-blue-500 w-full p-3 placeholder:text-gray-500'
				type='search'
				name='name'
				value={values.name}
				onChange={e => changeHandler('name', e.target.value)}
				placeholder='Enter name'
			/>
			<Select
				classNames={selectStyles}
				unstyled
				options={typesOptions}
				onChange={values => changeHandler('type', values?.value ?? '')}
				placeholder='Choose type'
			/>
			<Select
				classNames={selectStyles}
				unstyled
				options={musclesOptions}
				onChange={values => changeHandler('muscle', values?.value ?? '')}
				placeholder='Choose muscle'
			/>
			<Select
				classNames={selectStyles}
				unstyled
				options={difficultiesOptions}
				onChange={values => changeHandler('difficulty', values?.value ?? '')}
				placeholder='Choose difficulty'
			/>
			<div className='flex justify-center mt-3'>
				{isLoading ? (
					<LoadingButton />
				) : (
					<button
						type='submit'
						className=' text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-xl px-10 py-3 text-center mb-2 disabled:cursor-not-allowed disabled:bg-purple-600 disabled:text-gray-300'
						disabled={!isValid}>
						Search
					</button>
				)}
			</div>
			{!!error && (
				<div className='flex items-center p-2 text-lg text-black rounded-lg bg-red-600'>
					<svg
						className='flex-shrink-0 inline w-5 h-5 mr-3'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'>
						<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
					</svg>
					<span className='sr-only'>Info</span>
					<div>{error.message}</div>
				</div>
			)}
		</form>
	)
}

export default SearchForm
