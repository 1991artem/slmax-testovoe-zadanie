import { StyleSheet } from "react-native";

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  inputDescriptionContainer: {
    flexDirection: 'row',
    height: '40%',
    width: '90%', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleInput: {
    width: '90%', 
    height: '50%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  descriptionInput: {
    width: '90%', 
    fontStyle: 'normal',
    fontSize: 10,
  },
  textInputContainer: {
    flexDirection: 'column',
    borderColor: '#000000',
    width: '100%', 
    height: '20%',
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 40,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});

const stylesTask = StyleSheet.create({
  taskWrapper: {
      padding: 5,
      flexDirection: 'row',
      borderColor: '#000000',
      width: '99%', 
      height: 37,
      justifyContent: 'space-between',
      borderWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
  },
  title: {
    width: '25%',
    height: '90%', 
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  description: {
    width: '75%', 
    height: '90%', 
    marginLeft: 6,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  verticalLine: {
      borderBottomColor: 'white',
      borderBottomWidth: 4,
      marginLeft: 10,
      width: '100%',
      position: 'absolute',
      marginTop: 15
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    width: 100,
    height: 80,
},
})

export  {
  stylesApp,
  stylesTask
};