import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = () => {
    return (
        <View style={styles.container} >
            <Text>Detail Screen</Text>
        </View>
    )
}
export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})  