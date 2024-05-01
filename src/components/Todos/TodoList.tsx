import { useAppSelector } from '../../hooks/reduxHooks'
import { TodoItem } from './TodoItem'
import { List } from 'antd'

export const TodoList = () => {
	const todos = useAppSelector((state) => state.todos.list)

	return (
		<List
			dataSource={todos}
			renderItem={(todo) => <TodoItem {...todo} />}
		/>
	)
}
