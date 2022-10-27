import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import SensorAnimatedImage from "./src/components/SensorAnimatedImage";
import bg from './assets/images/bg.jpeg';


export default function App() {

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            <SensorAnimatedImage image={bg} />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {

    }
});
