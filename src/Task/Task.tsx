import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { stylesTask } from "../style";
import { ITask } from '../interfaces';

const SCREEN_WIDTH = Dimensions.get('window').width;

function Task(props: ITask) {
    const rightSwipe = (_progress: any, dragX: { interpolate: (arg0: { inputRange: number[]; outputRange: number[]; extrapolate: string; }) => any; }) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{ transform: [{ scale: scale }] }}>
                        Delete
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <Swipeable 
        renderRightActions={rightSwipe}
        onSwipeableWillOpen={props.delete}
        >
            <View style={stylesTask.taskWrapper}>
                <View style={stylesTask.title}>
                    <Text style={stylesTask.titleText}>{props.task.title}</Text>
                </View>
                <View style={stylesTask.description}>
                    <Text style={stylesTask.descriptionText}>{props.task.description}</Text>
                </View>
            </View>
        </Swipeable>
    );
}

export default Task;


const styles = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 16,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
    },
});