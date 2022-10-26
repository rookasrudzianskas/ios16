import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import NotificationList from "./src/components/NotificationList";
import Animated, {interpolate, SlideInDown, SlideInUp, useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import SwipeUpToOpen from "./src/components/SwipeUpToOpen";

export default function App() {
    const [date, setDate] = useState(dayjs());
    const footerVisibility = useSharedValue(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(dayjs());
        }, 1000 * 60);
        return () => clearInterval(interval);
    }, []);

    const animatedFooterStyle = useAnimatedStyle(() => ({
        // footer range, from 0 to 1, and then footer opacity is 0, margin is -85 (full), then footer visibility is 1, we want margin to be 0
        marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
        opacity: footerVisibility.value,
    }));

    return (
        <ImageBackground source={wallpaper} style={styles.container} className="">
            {/* Notification List*/}
            <NotificationList
                footerVisibility={footerVisibility}
                ListHeaderComponent={() => (
                    <Animated.View
                        // entering={SlideInUp}
                        style={styles.header}>
                        <Ionicons name="ios-lock-closed" size={20} color="white" />
                        <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
                        <Text style={styles.time}>{date.format("hh:mm")}</Text>
                    </Animated.View>
                )}
            />

            <Animated.View entering={SlideInDown} style={[styles.footer, animatedFooterStyle]}>
                <TouchableOpacity style={styles.icon} activeOpacity={0.7}>
                    <MaterialCommunityIcons name={"flashlight"} size={24} color={'white'} />
                </TouchableOpacity>

                <SwipeUpToOpen />

                <TouchableOpacity style={styles.icon} activeOpacity={0.7}>
                    <Ionicons name={"ios-camera"} size={24} color={'white'} />
                </TouchableOpacity>
            </Animated.View>
            <StatusBar style="light" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
    },
    date: {
        color: '#C3FFFE',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
    },
    time: {
        fontSize: 82,
        fontWeight: 'bold',
        color: '#C3FFFE',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 30,
        height: 75,
        marginBottom: 10,
    },
    icon: {
        backgroundColor: '#00000050',
        width: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
});
