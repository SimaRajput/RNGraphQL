import { StyleSheet } from 'react-native';
import Constants from '../constants';

const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: Constants.Colors.BUTTON_COLOR,
      marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
      width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    },
    container: { flex: 1 },
    content: {
      alignItems: 'center',
      flex: 1,
    },
    logoStyle: {
      alignSelf: 'center',
      height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
      marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 10,
      width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    },
    languageSwitchMainView: {
      flexDirection: "row",
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.2)",
      width: 72,
      borderRadius: 6,
      height: 32,
      overflow: "hidden",
      alignSelf: "flex-end",
      top: 10,
      right: 10,
      position: "absolute",
    },
    langBtnMainView: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F0F0F0",
      width: 36,
    },
    selectedBtn: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Constants.Colors.BUTTON_COLOR,
      width: 36,
    },
  
    selectedLangBtnText: {
      color: '#000',
      fontSize: 14,
      fontFamily: "Helvetica Neue",
    },
    selectLanguageText: {
      color: '#000',
      fontSize: 14,
    },
  
    langBtnText: {
      color: '#000',
      fontSize: 14,
    },
  });
  
  export default StyleSheet.create(styles);