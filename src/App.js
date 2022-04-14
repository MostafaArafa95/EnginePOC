import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SwiperScrollView from './components/SwiperScrollView'
import ControlledView from './components/ControlledView'
import { ControlMind } from './ControlMind'
import DummyText from './components/DummyText'
import MindProvider from './components/MindProvider'

const App = () => {
    const SmartComponent = useMemo(() => {
        //Ref Provide consumer

        const controlMind = new ControlMind();//FieldManager
        //Ref provider
        const ControlledDummyText = MindProvider(DummyText, controlMind);
        controlMind.saySomething();
        return ControlledDummyText;
    }, [])
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <SmartComponent />
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