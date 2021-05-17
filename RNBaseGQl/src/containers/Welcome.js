import { View, Image, TouchableOpacity, Text } from 'react-native';
import React, { useState, useEffect } from "react";
import { func, shape } from 'prop-types';
import Constants from '../constants';
import { WelcomeStyles } from '../styles';
import { Button } from '../components';
import { connect } from "react-redux";
import TimerMixin from "react-timer-mixin";
import ReactMixin from "react-mixin";
import * as updateLanguageActions from "../actions/update-language-types";
import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';
import i18n from '../constants/i18n';
import { useTranslation } from "react-i18next";


const Welcome = (props) => {
  let isEn = false;
  const { selectedLanguage } = props;
  let selectedLangValue = selectedLanguage?.lang;
  if (
    selectedLanguage &&
    selectedLanguage.lang &&
    selectedLanguage.lang === "en"
  ) {
    selectedLangValue = selectedLanguage.lang;
    isEn = true;
  };
  const [ENSelected, setIsENSelected] = useState(isEn ? true : false);
  const [ARSelected, setIsARSelected] = useState(isEn ? false : true);
  const [isEng, setIsEng] = useState(isEn);
  const [selectedLangVal, setSelectedLangValue] = useState(selectedLangValue);


  useEffect(() => {
    const { updateAppLanguage } = props;
    const data = {
      lang: selectedLangVal,
    };
    updateAppLanguage(data);
    measureConnectionSpeed();

  }, []);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.lang);

  }, [selectedLanguage.lang])


  const setENLanguage = () => {
    const data = { lang: "en" };
    setIsENSelected(true),
      setIsARSelected(false),
      updatelangData(data);
  }



  const setARLanguage = () => {
    const data = { lang: "ar" };
    setIsENSelected(false),
      setIsARSelected(true),
      updatelangData(data);
  }

  const updatelangData = async (data) => {
    await props?.updateAppLanguage(data);
    let setLang = "ar";
    if (
      selectedLanguage &&
      selectedLanguage.lang &&
      selectedLanguage.lang === "en"
    ) {
      setLang = "en";
    }
    i18n.changeLanguage(setLang);
  }


  const renderlangBtn = () => {
    return (
      <View style={WelcomeStyles.languageSwitchMainView}>
        <TouchableOpacity
          style={
            ARSelected ? WelcomeStyles.selectedBtn : WelcomeStyles.langBtnMainView
          }
          onPress={() => setARLanguage()}
        >
          <Text
            style={
              !ARSelected
                ? WelcomeStyles.langBtnText
                : WelcomeStyles.selectedLangBtnText
            }
          >
            AR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            !ARSelected ? WelcomeStyles.selectedBtn : WelcomeStyles.langBtnMainView
          }
          onPress={() => setENLanguage()}
        >
          <Text
            style={
              ARSelected
                ? WelcomeStyles.langBtnText
                : WelcomeStyles.selectedLangBtnText
            }
          >
            EN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const {
    navigation: { navigate },

  } = props;
  const { t } = useTranslation();

  return (
    <View style={WelcomeStyles.container}>
      {renderlangBtn()}
      <View style={WelcomeStyles.content}>
        <Image
          resizeMode="contain"
          source={Constants.Images.logo}
          style={WelcomeStyles.logoStyle}
        />
        <Button
          onPress={() => navigate('Signup')}
          style={WelcomeStyles.buttonStyle}
          title={t('common.signupBtnTitle')}
        />
        <Button
          onPress={() => navigate('Login')}
          style={WelcomeStyles.buttonStyle}
          title={t('common.LoginBtnTitle')}
        />
      </View>
    </View>
  );
}


ReactMixin(Welcome.prototype, TimerMixin);

export default connect(
  ({ language: { selectedLanguage } }) => ({
    selectedLanguage,
  }),
  {
    updateAppLanguage: updateLanguageActions.updateLanguage,
  }
)(Welcome);