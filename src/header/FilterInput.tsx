import React, { useContext, useState } from "react";
import { View, Text } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Button } from 'react-native-paper';
import { darkMode, styleFilter } from "../style";
import useAlert from "../hooks/alert.hook";
import { IFilter } from "../interfaces";
import { AppContext } from "../../App";

function FilterInput({dark, setFilter, setShowFilter}: IFilter) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const {setSubInputIsActive} = useContext(AppContext)

  const getStartDate = (event: DateTimePickerEvent, date?: Date) => {
    const {nativeEvent: {timestamp}} = event;
    if(timestamp){
      setStartDate(new Date(timestamp))
    }
  };

  const getEndDate = (event: DateTimePickerEvent, date?: Date) => {
    const {nativeEvent: {timestamp}} = event;
    if(timestamp){
      setEndDate(new Date(timestamp))
    }
  };

  const onPress = () => {
    if(startDate > endDate){
      useAlert("Некорректно", "Дата начала должна быть меньше чем дата окончания")
    } else {
      setFilter({
        startDate,
        endDate,
      })
      setSubInputIsActive(false)
      setShowFilter(false)
    }

  }

  return (
    <View style={!dark ? styleFilter.container : {...styleFilter.container, ...darkMode.backgroundBlack}}>
      <View style={styleFilter.row}>
        <Text style={!dark ? styleFilter.text : {...styleFilter.text, ...darkMode.color}}>Начало: </Text>
        <RNDateTimePicker 
        display="compact"
        themeVariant={dark ?"dark": "light"}
        value={startDate} 
        onChange={getStartDate}
        />
      </View>
      <View style={styleFilter.row}>
        <Text style={!dark ? styleFilter.text : {...styleFilter.text, ...darkMode.color}}>Конец: </Text>
        <RNDateTimePicker 
        display="compact"
        themeVariant={dark ?"dark": "light"}
        value={endDate} 
        onChange={getEndDate}
        />
      </View>
      <Button 
      icon="camera" 
      mode="contained" 
      onPress={onPress}
      style={!dark ? styleFilter.button : {...styleFilter.button, ...darkMode.background}}
      >
        Filter
      </Button>
    </View>
  )
}

export default FilterInput;
