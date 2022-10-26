import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import {Ionicons} from '@expo/vector-icons';

export default function App() {
    return (
        <ImageBackground source={wallpaper} style={styles.container} className="">
            <Ionicons name="ios-lock-closed" />
            <Text>Friday, 30 September</Text>
            <Text>3:26PM</Text>

            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
