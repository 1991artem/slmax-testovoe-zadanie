import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { baseColor, darkMode, stylesTask } from "../style";
import { ITask } from '../interfaces';
import { MaterialIcons } from "@expo/vector-icons";

interface IDelete {
    setTimer: (value: boolean) => void;
    delete: () => void;
}

function Task(props: ITask) {
    const [timer, setTimer] = useState(false);
    const [visible, setVisible] = useState(false);

    const shortDescriptionSize = 20;
    const shortDescription = props.task.description.substring(0, shortDescriptionSize)

    const touchHandler = () => setVisible(prev => !prev)
    const deleteTask = () => props.delete()

    const rightSwipe = () => timer ? <Delete delete={deleteTask} setTimer={setTimer}/> : null

    return (
        <>
            <Swipeable
                onSwipeableOpen={()=> setTimer(true)}
                renderRightActions={rightSwipe}
            >
                <TouchableOpacity onPress={touchHandler}>
                    <View style={!props.dark ? stylesTask.taskWrapper : {...stylesTask.taskWrapper, ...darkMode.border}}>
                        <View style={!props.dark ? stylesTask.title : {...stylesTask.title, ...darkMode.border}}>
                            <Text style={!props.dark ? stylesTask.titleText : {...stylesTask.titleText, ...darkMode.color}}>{props.task.title}</Text>
                        </View>
                        <View style={stylesTask.description}>
                            <Text style={!props.dark ? stylesTask.descriptionText : {...stylesTask.descriptionText, ...darkMode.color}}>{shortDescription}</Text>
                        </View>
                        <MaterialIcons name={visible ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={!props.dark ? baseColor.color.color : darkMode.color.color} />
                    </View>
                </TouchableOpacity>
            </Swipeable>
            {
                visible ?
                    <View style={!props.dark ? stylesTask.descriptionkWrapper : {...stylesTask.descriptionkWrapper, ...darkMode.borderBottomColor}}>
                        <Text style={!props.dark ? stylesTask.subTitle : {...stylesTask.subTitle, ...darkMode.color}}>{props.task.title}</Text>
                        <Text style={!props.dark ? stylesTask.mainDescription : {...stylesTask.mainDescription, ...darkMode.color}}>{props.task.description}</Text>
                        <View style={stylesTask.subInfo}>
                        <Text style={!props.dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>{props.task.createdAt.toUTCString()}</Text>
                        <Text style={!props.dark ? stylesTask.subInfoText : {...stylesTask.subInfoText, ...darkMode.color}}>Comments: {props.task.comments.length}</Text>
                        </View>
                        
                    </View>
                    : null
            }
        </>

    );
}

export default Task;

const Delete = (props: IDelete) => {
    const [time, setTime] = useState(5);
    if (time <= 0) {
        props.delete()
    }

    const interval = setInterval(() => setTime(prev => prev - 1), 1000);
    
    const stopTimer = () => {
        setTime(5)
        clearInterval(interval)
        props.setTimer(false)
    }

    useEffect(()=>{
        return ()=>{
            clearInterval(interval)
        }
    })

    return (
                <View style={stylesTask.deleteBox}>
                    <Text style={stylesTask.deleteBoxText}>{time}</Text>
                    <TouchableOpacity
                    onPress={stopTimer}
                    >
                        <MaterialIcons
                            style={stylesTask.deleteBoxText}
                            name={"cancel"}
                            size={24}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>
    )
}
