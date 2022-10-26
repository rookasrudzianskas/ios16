import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import wallpaper from './assets/images/wallpaper.webp';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import dayjs from "dayjs";

export default function App() {
    return (
        <ImageBackground source={wallpaper} style={styles.container} className="">
            <View style={styles.header}>
                <Ionicons name="ios-lock-closed" size={20} color="white" />
                <Text style={styles.date}>{dayjs().format("dddd, DD MMMM")}</Text>
                <Text style={styles.time}>{dayjs().format("hh:mm")}</Text>
            </View>

            {/* Notification List*/}

            <View style={styles.footer}>
                <TouchableOpacity style={styles.icon} activeOpacity={0.7}>
                    <MaterialCommunityIcons name={"flashlight"} size={24} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} activeOpacity={0.7}>
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
        alignItems: 'stretch',
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
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 30,
        height: 75,
    },
    icon: {
        backgroundColor: '#00000050',
        width: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
});
