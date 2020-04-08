import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	FlatList,
} from 'react-native'

export default function simpleTodoApp() {
	const [todo, setTodo] = useState([])
	const [todoInputValue, setTodoInputValueChange] = useState('')

	const addTodo = () => {
		if (todoInputValue.length > 0) {
			const singleTodo = {
				id: todo.length + 1,
				task: todoInputValue,
			}
			setTodo([...todo, singleTodo])
			setTodoInputValueChange('')
		}
	}

	const deleteTodo = (deleteId) => {
		const newTodo = todo.filter((item) => item.id !== deleteId)
		setTodo(newTodo)
	}

	return (
		<View style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.title}> Simple Todo App</Text>
			</View>
			<View style={styles.todoContainer}>
				<TextInput
					style={styles.addTodoInput}
					onChangeText={(text) => setTodoInputValueChange(text)}
					value={todoInputValue}
					placeholder='Add task'
				/>
				<Button title='Add' color='#4374c1' onPress={() => addTodo()} />
				<FlatList
					data={todo}
					renderItem={({ item }) => (
						<View style={styles.todoListing}>
							<Text style={styles.todoListItem}>{item.task}</Text>
							<Button
								title='Delete'
								color='#fc6064'
								onPress={() => deleteTodo(item.id)}
							/>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f6fbfe',
	},
	heading: {
		marginTop: 50,
		padding: 20,
		backgroundColor: '#010535',
		textAlign: 'center',
	},
	title: {
		fontWeight: '700',
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 25,
	},
	todoContainer: {
		marginTop: 30,
		padding: 30,
	},
	addTodoInput: {
		height: 40,
		padding: 5,
		color: '#000',
		marginBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: 'grey',
	},
	todoListing: {
		backgroundColor: '#010535',
		marginTop: 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		borderRadius: 5,
	},
	todoListItem: {
		color: '#fff',
		fontSize: 25,
	},
})
