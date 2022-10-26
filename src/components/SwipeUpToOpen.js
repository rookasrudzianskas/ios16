//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withRepeat, withSequence, withTiming} from "react-native-reanimated";

const SwipeUpToOpen = () => {

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withRepeat(
                    withSequence(
                        withTiming(-15, { duration: 300 }),
                    )
                )
            }
        ]
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
