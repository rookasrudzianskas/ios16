//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated from "react-native-reanimated";

const SwipeUpToOpen = () => {
    return (
        <Animated.Text
            style={[
            {
                color: "white",
                fontWeight: "600",
                alignSelf: "flex-end",
                letterSpacing: 0.5,
            },
        ]}>
            Swipe up to open
        </Animated.Text>
    );
};

export default SwipeUpToOpen;
