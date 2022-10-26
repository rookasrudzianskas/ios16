import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LockScreen from "./src/screens/LockScreen";

export default function App() {

    return (
        <>
            <LockScreen />
            <StatusBar style="light" />
        </>
    );
}

const styles = StyleSheet.create({

});
