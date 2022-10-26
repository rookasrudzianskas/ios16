//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image,Pressable, TouchableOpacity} from 'react-native';
import Animated, {interpolate, useAnimatedStyle, withTiming} from "react-native-reanimated";

export const NOTIFICATION_HEIGHT = 80;

const NotificationItem = ({data, index, listVisibility}) => {

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: interpolate(listVisibility.value, [0, 1], [600, 0])
            }]
        }
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            {/*<TouchableOpacity activeOpacity={0.7} style={styles.container}>*/}
                <Image source={data.icon} style={styles.icon} />
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{data.title || 'Loading..'}</Text>
                    <Text style={styles.subtitle} numberOfLines={2}>{data.subtitle || 'Loading..'}</Text>
                </View>
                <Text style={styles.time}>{data.createdAt || 'Loading..'} ago</Text>
            {/*</TouchableOpacity>*/}
        </Animated.View>
    );
};

export default NotificationItem;

const styles = StyleSheet.create({
    container: {
        height: NOTIFICATION_HEIGHT - 10,
        backgroundColor: "#00000075",
        margin: 5,
        marginHorizontal: 10,
        padding: 13,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    time: {
        color: "lightgray",
        fontSize: 12,
        position: "absolute",
        right: 10,
        top: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        color: "white",
        fontWeight: "500",
        letterSpacing: 0.2,
    },
    subtitle: {
        color: "white",
        lineHeight: 18,
        letterSpacing: 0.2,
    },
});
