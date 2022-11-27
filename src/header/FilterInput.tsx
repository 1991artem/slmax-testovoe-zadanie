import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Button } from 'react-native-paper';
import { baseColor, darkMode } from "../style";
import useAlert from "../hooks/alert.hook";
import { IFilter } from "../interfaces";

function FilterInput({dark, setFilter}: IFilter) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

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
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Начало: </Text>
        <RNDateTimePicker 
        display="compact"
        value={startDate} 
        onChange={getStartDate}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Конец: </Text>
        <RNDateTimePicker 
        display="compact"
        value={endDate} 
        onChange={getEndDate}
        />
      </View>
      <Button 
      icon="camera" 
      mode="contained" 
      onPress={onPress}
      style={!dark ? styles.button : {...styles.button, ...darkMode.background}}
      >
        Filter
      </Button>
    </View>
  )
}

export default FilterInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  row: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text: {
    color: baseColor.color.color
  },
  button: {
    backgroundColor: '#82C8DE',
  }
});