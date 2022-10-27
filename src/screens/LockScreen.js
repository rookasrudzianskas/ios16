import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import wallpaper from '../../assets/images/wallpaper.webp';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import dayjs from "dayjs";
import {useEffect, useMemo, useState} from "react";
import NotificationList from "../components/NotificationList";
import Animated, {
    Easing,
    interpolate,
    SlideInDown,
    SlideInUp, useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue, withTiming
} from "react-native-reanimated";
import SwipeUpToOpen from "../components/SwipeUpToOpen";
import {PanGestureHandler} from "react-native-gesture-handler";
import home2 from "../../assets/images/home2.jpg";

const LockScreen = () => {
    const [date, setDate] = useState(dayjs());
    const footerVisibility = useSharedValue(1);
    const footerHeight = useDerivedValue(() => interpolate(footerVisibility.value, [0, 1], [0, 85]));
    const y = useSharedValue(0);
    const { height } = useWindowDimensions();

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

    const animatedContainerStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withTiming(y.value, { duration: 100, easing: Easing.linear}),
            }
        ]
    }));

    const unlockGestureHandler = useAnimatedGestureHandler({
        onStart: () => {
            console.log('onStart');
        },
        onActive: (event) => {
            console.log(event)
            y.value = event.y;
        },
        onEnd: (event) => {
            if(y.value < -height / 2 || event.velocityY < -500) {
                // unlock
                y.value = withTiming(-height, { duration: 300, easing: Easing.linear });
            } else {
                // reset
                y.value = withTiming(0, { easing: Easing.linear });
            }
        }
    })

    const Header = useMemo(
        () => (
            <Animated.View entering={SlideInUp} style={styles.header}>
                <Ionicons name="ios-lock-closed" size={20} color="white" />
                <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
                <Text style={styles.time}>{date.format("hh:mm")}</Text>
            </Animated.View>
        ),
        [date]
    );

    return (
        <>
            {/* homeScreen */}
            <ImageBackground source={home2} style={{width: '100%', height: '100%', ...StyleSheet.absoluteFill}} >
                {/*<PanGestureHandler onGestureEvent={unlockGestureHandler}>*/}
                {/*    <Animated.View style={[styles.panGestureContainerLock]}>*/}

                {/*    </Animated.View>*/}
                {/*</PanGestureHandler>*/}
            </ImageBackground>
            {/* lock screen */}
            <Animated.View style={[styles.container, animatedContainerStyle]}>
                <ImageBackground source={wallpaper} style={styles.container} className="">
                    {/* Notification List*/}
                    <NotificationList
                        footerVisibility={footerVisibility}
                        footerHeight={footerHeight}
                        ListHeaderComponent={Header}
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

                    <PanGestureHandler onGestureEvent={unlockGestureHandler}>
                        <Animated.View style={styles.panGestureContainerUnlock}>

                        </Animated.View>
                    </PanGestureHandler>

                </ImageBackground>
            </Animated.View>
        </>
    );
}

export default LockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        // width: '100%'
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
    },
    panGestureContainerUnlock: {
        position: "absolute",
        width: "100%",
        height: 200,
        bottom: 0,
        left: 0,
        backgroundColor: "red",
        transform: [
            {
                translateY: 100
            }
        ]
    },
    // panGestureContainerLock: {
    //     backgroundColor: 'blue',
    //     position: 'absolute',
    //     width: '100%',
    //     height: 100,
    //     top: 0,
    //     left: 0,
    // }
});
