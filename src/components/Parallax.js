//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SensorAnimatedImage from "./SensorAnimatedImage";

const Parallax = ({ layers }) => {
    return (
        <>
            {layers.reverse().map((layer, index) => (
                <SensorAnimatedImage key={`layer_${index}`} image={layer} order={index + 1} />
            ))}
        </>
    );
};

export default Parallax;
