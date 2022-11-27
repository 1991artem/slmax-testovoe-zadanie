import { StyleSheet } from "react-native";

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputDescriptionContainer: {
    flexDirection: 'row',
    height: '40%',
    width: '95%', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleInput: {
    width: '95%', 
    height: '50%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    borderBottomWidth: 1,
    color: '#000000',
    borderBottomColor: '#000000'
  },
  descriptionInput: {
    width: '90%', 
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 10,
  },
  textInputContainer: {
    flexDirection: 'column',
    borderColor: '#000000',
    width: '95%', 
    height: '20%',
    minHeight: 100,
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
      marginTop: 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'row',
      borderColor: '#000000',
      width: '97%',
      height: 37,
      justifyContent: 'space-between',
      borderWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
  },
  title: {
    width: '30%',
    height: '90%', 
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#000000',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  description: {
    width: '60%', 
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
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 150,
    height: 80
  },
  deleteBoxText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginRight: 10,
    marginTop: 10
  },
  descriptionkWrapper: {
    padding: 5,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 10,
  },
  subInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4
  },
  subTitle: {
    color: '#000000',
    fontWeight: 'bold'
  },
  subInfoText: {
    fontSize: 8,
    color: '#000000'
  },
  mainDescription: {
    fontSize: 12,
    color: '#000000'
  }
})

const stylesHeader = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: "flex",
    alignItems: "flex-end",
  },
  toolBar: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 20,
    width: '90%',
    height: 25,
  },
  switch: {
    width: 60,
    height: 25,
  },
});

const darkMode = StyleSheet.create({
  border: {
    borderColor: '#FFFFFF',
  },
  color: {
    color: '#FFFFFF',
  },
  borderBottomColor: {
    borderBottomColor: '#FFFFFF'
  },
  background: {
    backgroundColor: '#362693'
  }
})

const baseColor = StyleSheet.create({
  border: {
    borderColor: "#000000",
  },
  color: {
    color: "#000000",
  },
  borderBottomColor: {
    borderBottomColor: "#000000"
  }
})

const stylesComments = StyleSheet.create({
  commentWrapper: {
      padding: 5,
      marginTop: 10,
      flexDirection: 'column',
      borderColor: 'red',
      width: '60%',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
  },
  text: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  answer: {
    marginLeft: 'auto',
    borderColor: 'green',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
    color: '#000000',
    padding: 5,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 10,
  }
})

export  {
  stylesHeader,
  stylesApp,
  stylesTask,
  stylesComments,
  baseColor,
  darkMode
};