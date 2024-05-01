import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'
import { fetchTodos, addNewTodo } from './store/todoSlice'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'
import { Flex, Typography } from 'antd'

export const App = () => {
	const [text, setText] = useState('')
	const { loading, error } = useAppSelector((state) => state.todos)
	const dispatch = useAppDispatch()

	const handleAction = () => {
		if (text.trim().length) {
			dispatch(addNewTodo(text))
			setText('')
		}
	}

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	return (
		<Flex vertical align='center' justify='center'>
			<Typography.Title>Todo List</Typography.Title>
			<TodoForm
				value={text}
				updateText={setText}
				handleAction={handleAction}
			/>
			{loading ? (
				<Typography.Title level={2}>Loading...</Typography.Title>
			) : error ? (
				<Typography.Title level={2}>Произошла ошибка</Typography.Title>
			) : (
				<TodoList />
			)}
		</Flex>
	)
}
