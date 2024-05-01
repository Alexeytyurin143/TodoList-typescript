import { useState } from 'react'
import { useAppDispatch } from './hooks/reduxHooks'
import { addTodo } from './store/todoSlice'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'
import './App.css'
import { Flex, Typography } from 'antd'

export const App = () => {
	const [text, setText] = useState('')
	const dispatch = useAppDispatch()

	const handleAction = () => {
		if (text.trim().length) {
			dispatch(addTodo(text))
			setText('')
		}
	}

	return (
		<Flex vertical align='center' justify='center'>
			<Typography.Title>Todo List</Typography.Title>
			<TodoForm
				value={text}
				updateText={setText}
				handleAction={handleAction}
			/>
			<TodoList />
		</Flex>
	)
}
