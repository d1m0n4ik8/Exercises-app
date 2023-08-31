import { FC } from 'react'
import SearchForm from '../components/SearchForm'

const Home: FC = () => {
	return (
		<div className='w-full h-screen flex justify-center items-center p-8'>
			<SearchForm />
		</div>
	)
}

export default Home
