import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Animated, {
    interpolate,
    SensorType,
    useAnimatedSensor,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";

const IMAGE_OFFSET = 100;
const PI = Math.PI;
const HALF_PI = PI / 2;

const SensorAnimatedImage = ({ image }) => {
    const {width, height} = useWindowDimensions();
    const sensor = useAnimatedSensor(SensorType.ROTATION);

    const imageStyle = useAnimatedStyle(() => {
        const {yaw, pitch, roll} = sensor.sensor.value;
        // console.log("YAW >> ", yaw.toFixed(1),"PITCH >>> ", pitch.toFixed(1), "ROLL >> ", roll.toFixed(1));
        return {
            // does for the Y axis, the rotation of the phone
            top: withTiming(interpolate(pitch, [-HALF_PI, HALF_PI], [-IMAGE_OFFSET * 2, 0]), { duration: 100 }),
            // does for the X axis, the rotation of the phone
            left: withTiming(interpolate(roll, [-PI, PI], [-IMAGE_OFFSET * 2, 0]), { duration: 100 }),
        };
    });

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            <Animated.Image source={image} style={[
                {
                    width: width + 2 * IMAGE_OFFSET,
                    height: height + 2 * IMAGE_OFFSET,
                    position: 'absolute',
                },
                imageStyle
            ]}/>
        </View>
    );
}

export default SensorAnimatedImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {

    }
});
