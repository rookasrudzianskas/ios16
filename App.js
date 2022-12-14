import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, View} from 'react-native';
import layer1 from './assets/images/Parallax/2.png';
import layer2 from './assets/images/Parallax/3.png';
import layer3 from './assets/images/Parallax/4.png';
import layer4 from './assets/images/Parallax/5.png';
import Parallax from "./src/components/Parallax";
import LockScreen from "./src/screens/LockScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import home2 from './assets/images/home2.jpg';


export default function App() {

    return (
        <GestureHandlerRootView style={styles.container}>
            <LockScreen />
            {/*<SensorAnimatedImage image={bg} />*/}
            {/*<Parallax  layers={[layer1, layer2, layer3, layer4]} />*/}
            <StatusBar style="light" />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {

    }
});
