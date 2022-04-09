import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SwiperScrollView from './components/SwiperScrollView'
import ControlledView from './components/ControlledView'

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ControlledView />
            </SafeAreaView>

        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    box1: {
        backgroundColor: "green",
        flex: 1

    },
    box2: {
        backgroundColor: "blue",
        flex: 1
    },
    box3: {
        backgroundColor: "yellow",
        flex: 1
    },

    box4: {
        backgroundColor: "grey",
        flex: 1

    }
})

export default App