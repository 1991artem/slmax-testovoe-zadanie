import React from "react";
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { stylesTask } from "../style";
import { ITask } from '../interfaces';

function Task(props: ITask) {
    const rightSwipe = () => {
        return (
        <View style={stylesTask.deleteBox}></View>
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
