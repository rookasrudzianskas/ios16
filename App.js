import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
    return (
        <ImageBackground source={wallpaper} style={styles.container} className="">
            <View style={styles.header}>
                <Ionicons name="ios-lock-closed" size={20} color="white" />
                <Text style={styles.date}>Friday, 30 September</Text>
                <Text style={styles.time}>11:54</Text>
            </View>

            {/* Notification List*/}

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <MaterialCommunityIcons name={"flashlight"} size={24} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <Ionicons name={"ios-camera"} size={24} color={'white'} />
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    }
});
