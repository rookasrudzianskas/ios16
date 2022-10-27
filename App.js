import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import SensorAnimatedImage from "./src/components/SensorAnimatedImage";
import bg from './assets/images/bg.jpeg';
// import layer1 from './assets/images/Parallax/1.png';
import layer1 from './assets/images/Parallax/2.png';
import layer2 from './assets/images/Parallax/3.png';
import layer3 from './assets/images/Parallax/4.png';
import layer4 from './assets/images/Parallax/5.png';
import Parallax from "./src/components/Parallax";


export default function App() {

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            {/*<SensorAnimatedImage image={bg} />*/}
            <Parallax  layers={[layer1, layer2, layer3, layer4]} />
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
