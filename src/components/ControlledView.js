import { View, Text, Button, } from 'react-native'
import React, { useState, useRef, useReducer } from 'react'
import DummyText from './DummyText';

const ControlledView = () => {
    //const [displayText, setDisplayText] = useState("");
    const [ignored, updateSelf] = useReducer(x => x + 1, 0);
    const textRef = useRef(null);
    const displayText = useRef("Hello")
    return (
        <>

            <DummyText text={displayText.current} ref={textRef} />
            <Button title='fillText' onPress={() => {
                displayText.current += "A"
            }} />
            <Button title='getText' onPress={() => {
                console.log({ displayText: displayText.current })
            }} />
            <Button title='force update' onPress={() => {
                textRef.current.forceUpdate(displayText.current);
            }} />


        </>

    )
}

export default ControlledView