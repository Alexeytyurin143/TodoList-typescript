import { Checkbox, List, Typography } from 'antd'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { removeTodo, toggleComplete } from '../../store/todoSlice'
import { CloseOutlined } from '@ant-design/icons'

interface TodoItemProps {
	id: string
	title: string
	completed: boolean
}

export const TodoItem = ({ id, title, completed }: TodoItemProps) => {
	const dispatch = useAppDispatch()

	return (
		<List.Item style={{ gap: '10px', margin: '0 10px' }}>
			<Checkbox
				checked={completed}
				onChange={() => dispatch(toggleComplete(id))}
			/>
			<Typography.Text>{title}</Typography.Text>
			<CloseOutlined onClick={() => dispatch(removeTodo(id))} />
		</List.Item>
	)
}
