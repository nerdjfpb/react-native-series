import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function CounterProject() {
	const [counter, setCounter] = useState(0)
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{counter}</Text>
			<Button
				title='Increase +'
				color='#014294'
				onPress={() => setCounter(counter + 1)}
			/>
			<Button
				title='Decrease - '
				color='#ff6160'
				onPress={() => setCounter(counter - 1)}
				disabled={counter < 1 ? true : false}
			/>
			<Button
				title='Reset to Zero'
				color='#fdc5c8'
				onPress={() => setCounter(0)}
				disabled={counter < 1 ? true : false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2a2b3d',
		padding: 30,
		justifyContent: 'center',
	},
	heading: {
		color: '#ff6160',
		fontSize: 100,
		textAlign: 'center',
	},
})
