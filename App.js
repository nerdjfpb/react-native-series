import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Counter from './Counter'

export default function App() {
	const [counter, setCounter] = useState(0)
	return (
		<View style={styles.container}>
			<Counter counter={counter} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
