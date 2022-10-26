import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import LockScreen from "./src/screens/LockScreen";
import bg from './assets/images/bg.jpeg';
import Animated, {SensorType, useAnimatedSensor, useAnimatedStyle} from "react-native-reanimated";

const IMAGE_OFFSET = 300;

export default function App() {
    const {width, height} = useWindowDimensions();
    const sensor = useAnimatedSensor(SensorType.ROTATION, {interval: 1000});

    const imageStyle = useAnimatedStyle(() => {
        const {yaw, pitch, roll} = sensor.sensor.value;
        console.log("YAW >> ", yaw.toFixed(1),"PITCH >>> ", pitch.toFixed(1), "ROLL >> ", roll.toFixed(1));
        return {
            top: -200,
            left: 0
        };
    });

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            <Animated.Image source={bg} style={[
                {
                    width: width + 2 * IMAGE_OFFSET,
                    height: height + 2 * IMAGE_OFFSET,
                    position: 'absolute'
                },
                imageStyle
            ]}/>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {

    }
});
