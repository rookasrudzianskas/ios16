//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";

const NotificationList = ({ ...flatListProps }) => {
    return (
        <FlatList
            data={notifications}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <NotificationItem data={item} index={index} />
            )}
            {...flatListProps}
        />
    );
};

export default NotificationList;
