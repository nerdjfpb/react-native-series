import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.mainText}>
				Welcome to Nerdjfpb React Native Series
			</Text>
		</View>
	)
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
