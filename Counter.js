import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Counter(props) {
	return <Text style={styles.mainText}>Counter:{props.counter}</Text>
}

const styles = StyleSheet.create({
	mainText: {
		backgroundColor: '#5CA2FA',
		padding: 20
	}
})
