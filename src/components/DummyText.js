import { View, Text } from 'react-native'
import React, { forwardRef, useImperativeHandle, useReducer, useState } from 'react'
//Field Wrapper
const DummyText = forwardRef((props, ref) => {

    const [text, setText] = useState("default value")
    useImperativeHandle(ref, () => ({
        forceUpdate(value) {
            setText(value)
        },



    }));
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
})

export default DummyText