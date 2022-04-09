import { View, Text } from 'react-native'
import React, { forwardRef, useImperativeHandle, useReducer, useState } from 'react'

const DummyText = forwardRef((props, ref) => {

    const [text, setText] = useState("")
    useImperativeHandle(ref, () => ({
        forceUpdate(value) {
            setText(value)
        }
    }));
    return null;
    /* return (
        <View>
            <Text>{text}</Text>
        </View>
    ) */
})

export default DummyText