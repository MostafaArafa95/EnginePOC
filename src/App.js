import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SwiperScrollView from './components/SwiperScrollView'

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <SwiperScrollView horizontal={true}>
                    <View style={styles["box1"]}><Text>Child 1</Text></View>
                    <View style={styles["box2"]}><Text>Child 2</Text></View>
                    <View style={styles["box3"]}><Text>Child 3</Text></View>
                    <View style={styles["box4"]}><Text>Child 4</Text></View>

                </SwiperScrollView>
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