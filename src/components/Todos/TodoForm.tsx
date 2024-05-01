import { Button, Form, Space, Input } from 'antd'

interface NewTodoFormProps {
	value: string
	updateText: (str: string) => void
	handleAction: () => void
}

export const TodoForm = ({
	value,
	updateText,
	handleAction,
}: NewTodoFormProps) => {
	return (
		<Form onFinish={handleAction}>
			<Space.Compact>
				<Input
					placeholder='new todo'
					value={value}
					onChange={(e) => updateText(e.target.value)}
				/>

				<Button type='primary' htmlType='submit'>
					Add todo
				</Button>
			</Space.Compact>
		</Form>
	)
}
