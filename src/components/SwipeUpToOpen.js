//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from "react-native-reanimated";

const SwipeUpToOpen = () => {

    const animatedStyles = useAnimatedStyle(() => ({

    }));

    return (
        <Animated.Text
            style={[
            {
                color: "white",
                fontWeight: "600",
                alignSelf: "flex-end",
                letterSpacing: 0.5,
            },
                animatedStyles,
        ]}>
            Swipe up to open
        </Animated.Text>
    );
};

export default SwipeUpToOpen;
