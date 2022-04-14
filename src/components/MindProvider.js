import React, { Component, useCallback } from 'react';
///Ref Provider
export default function MindProvider(Comp, Mind) {
    //TODO: provide the mind with the component
    return (props) => {
        const setRef = useCallback((ref) => {
            Mind.setComponentRef(ref);
        })
        return <Comp {...props} ref={setRef} />
    }
}