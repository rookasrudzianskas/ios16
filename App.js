import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LockScreen from "./src/screens/LockScreen";
import bg from './assets/images/bg.jpeg';
import {useAnimatedSensor} from "react-native-reanimated";

export default function App() {

    const sensor = useAnimatedSensor();

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            <Image source={bg} style={styles.image} />
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
        width: '100%',
        height: '100%',
    }
});
