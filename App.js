import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LockScreen from "./src/screens/LockScreen";

export default function App() {

    return (
        <View style={styles.container}>
            {/*<LockScreen />*/}
            <Text>Hello Bro!</Text>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
