//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";
import Animated, {useAnimatedScrollHandler, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

const NotificationList = ({ footerVisibility, ...flatListProps }) => {
    const {height} = useWindowDimensions();
    const listVisibility = useSharedValue(1)
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
        },
        onBeginDrag: (event) => {
            if(listVisibility.value < 1) {
                listVisibility.value = withSpring(1);
            }
        },
        onEndDrag: (event) => {
            if(event.contentOffset.y < 0) {
                listVisibility.value = withTiming(0);
            }
        }
    });

    return (
        <Animated.FlatList
            data={notifications}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <NotificationItem data={item} index={index} listVisibility={listVisibility} />
            )}
            {...flatListProps}
            onScroll={handler}
            scrollEventThrottle={16}
        />
    );
};

export default NotificationList;
