//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";
import Animated, {useAnimatedScrollHandler, withTiming} from "react-native-reanimated";

const NotificationList = ({ footerVisibility, ...flatListProps }) => {
    const {height} = useWindowDimensions();
    const handler = useAnimatedScrollHandler({
        onScroll: (event) => {
            // console.log(event.contentOffset.y);
            const y = event.contentOffset.y;
            if(y < 10) {
                // have the footer open
                footerVisibility.value = withTiming(1, { duration: 300 });
            } else {
                // we should close the footer
                footerVisibility.value = withTiming(0, { duration: 300 });
            }
        }
    });

    return (
        <Animated.FlatList
            data={notifications}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <NotificationItem data={item} index={index} />
            )}
            {...flatListProps}
            onScroll={handler}
            scrollEventThrottle={16}
        />
    );
};

export default NotificationList;
