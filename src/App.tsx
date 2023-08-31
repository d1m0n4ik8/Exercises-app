import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Exercises from './pages/Exercises'
import Home from './pages/Home'

const App: FC = () => {
	return (
		<div className='min-h-screen w-full bg-stone-800 text-white'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercises' element={<Exercises />} />
			</Routes>
		</div>
	)
}

export default App
