export interface IExercise {
	name: string
	type: string
	muscle: string
	difficulty: string
}

export interface IExerciseData extends IExercise {
	equipment: string
	instructions: string
}
