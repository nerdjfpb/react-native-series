import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
	state = {
		counter: 0
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.mainText}>Counter: {this.state.counter}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainText: {
		backgroundColor: '#5CA2FA',
		padding: 20
	}
})
