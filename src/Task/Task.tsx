import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { baseColor, darkMode, stylesTask } from "../style";
import { IDelete, ITask } from '../interfaces';
import { MaterialIcons } from "@expo/vector-icons";
import Description from "./Description";
import { AppContext } from "../TodosApp/TodosApp";


function Task({task}: ITask) {
    const [timer, setTimer] = useState(false);
    const [visible, setVisible] = useState(false);

    const {deleteTask} = useContext(AppContext)

    const {dark} = useContext(AppContext)

    const shortDescriptionSize = 20;
    const shortDescription = task.description.substring(0, shortDescriptionSize)

    const touchHandler = () => setVisible(prev => !prev)

    const deleteItem = () => deleteTask(task.key)

    const rightSwipe = () => timer ? <Delete delete={deleteItem} setTimer={setTimer}/> : null

    return (
        <>
            <Swipeable
                onSwipeableOpen={()=> setTimer(true)}
                renderRightActions={rightSwipe}
            >
                
                <View style={!dark ? stylesTask.taskWrapper : {...stylesTask.taskWrapper, ...darkMode.border}}>
                    <View style={!dark ? stylesTask.title : {...stylesTask.title, ...darkMode.border}}>
                        <Text style={!dark ? stylesTask.titleText : {...stylesTask.titleText, ...darkMode.color}}>{task.title}</Text>
                    </View>
                    <View style={stylesTask.description}>
                        <Text style={!dark ? stylesTask.descriptionText : {...stylesTask.descriptionText, ...darkMode.color}}>{shortDescription}</Text>
                    </View>
                    <TouchableOpacity onPress={touchHandler}>
                        <MaterialIcons name={visible ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={!dark ? baseColor.color.color : darkMode.color.color} />
                    </TouchableOpacity>
                </View>

            </Swipeable>
            {
                visible ? <Description props={task}/> : null
            }
        </>

    );
}

export default Task;

const Delete = (props: IDelete) => {
    const [time, setTime] = useState(5);
    if (time <= 0) {
        props.setTimer(false)
        props.delete()
    }
    
    const stopTimer = () => {
        props.setTimer(false)
    }

    useEffect(()=>{
        const interval= setInterval(() => setTime(prev => prev - 1), 1000)
        return ()=>{
            clearInterval(interval)
            props.setTimer(false)
        }
    }, [])

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
