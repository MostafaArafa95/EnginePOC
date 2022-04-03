import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'


const SwiperScrollView = (props) => {
    const { horizontal = true, onIndexChanged, children } = props;
    const pages = Object.keys(children)
    const [childrenSize, setChildrenSize] = useState({ width: 0, height: 0 })
    const scrollRef = useRef();
    const [index, setIndex] = useState(0);
    const clampScrollPosition = (scrollOffset) => {
        const factor = horizontal ? childrenSize.width : childrenSize.height;
        const snipPoints = new Array(pages.length).fill(null).map((value, index) => index * factor);

        const currentScrollPosition = horizontal ? scrollOffset.x : scrollOffset.y
        let newIndex = 0;
        const closestPoint = snipPoints.reduce(
            (prev, current, currentIndex) => {
                if (Math.abs(current - currentScrollPosition) < Math.abs(prev - currentScrollPosition)) {
                    newIndex = currentIndex;
                    return current
                }
                return prev
            }
        )
        if (newIndex !== index) {
            setIndex(newIndex);
            onIndexChanged?.(newIndex);
        }
        scrollRef.current.scrollTo(horizontal ? { x: closestPoint } : { y: closestPoint }, true)
    }
    const onScrollEndDrag = (e) => {
        const { contentOffset } = e.nativeEvent
        clampScrollPosition(contentOffset)
    }

    onLayout = event => {
        const { width, height } = event.nativeEvent.layout
        setChildrenSize({ height, width })

    }

    const getChildrenStyle = () => {
        return {
            height: childrenSize.height,
            width: childrenSize.width
        }
    }

    return (
        <ScrollView
            onLayout={onLayout}
            horizontal={true}
            style={{ flex: 1 }}
            onScrollEndDrag={onScrollEndDrag}
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            {...props}
        >
            {
                pages.map((page, index) => {
                    return <View key={index} style={getChildrenStyle()}>
                        {children[page]}

                    </View>
                })
            }

        </ScrollView>


    )
}


export default SwiperScrollView