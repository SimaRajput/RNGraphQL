import React, { PureComponent } from 'react';
import { View, Image,TouchableOpacity,Text } from 'react-native';
import { func, shape } from 'prop-types';
import Constants from '../constants';
import { WelcomeStyles } from '../styles';
import { Button } from '../components';
import { connect } from "react-redux";
import TimerMixin from "react-timer-mixin";
import ReactMixin from "react-mixin";
import * as updateLanguageActions from "../actions/update-language-types";
import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';


class Welcome extends PureComponent {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      navigate: func.isRequired,
    }).isRequired,
  };

  componentDidMount(){
    this.getNetworkBandwidth()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { selectedLanguage } = nextProps;
    if (
      selectedLanguage &&
      selectedLanguage.lang &&
      selectedLanguage.lang !== prevState.selectedLanguage
    ) {
      Constants.i18n.setLanguage(selectedLanguage.lang);
      let isEng = false;
      if (selectedLanguage.lang === "en") {
        isEng = true;
      }

      return { isEng: isEng, selectedLangVal: selectedLanguage.lang };
    }
  }
  
  getNetworkBandwidth = async () => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      console.log('networkSpeed',networkSpeed); // Network bandwidth speed 
    } catch (err) {
      console.log(err);  
    }
  }
  
  constructor(props) {
    super(props);
    let isEng = false;
    const { selectedLanguage } = props;
    let selectedLangVal = selectedLanguage?.lang;

    if (
      selectedLanguage &&
      selectedLanguage.lang &&
      selectedLanguage.lang === "en"
    ) {
      selectedLangVal = selectedLanguage.lang;
      isEng = true;
    }
    this.state = {
      ENSelected: isEng ? true : false,
      ARSelected: isEng ? false : true,
      isEng: isEng,
      selectedLangVal: selectedLangVal
    };
    const data = {
      lang: selectedLangVal,
    };
    this.props?.updateAppLanguage(data);
  }
  

  setENLanguage() {
    this.setState(
      {
        ENSelected: true,
        ARSelected: false,
      },
      () => {
        const data = { lang: "en" };

        this.updatelangData(data);
      }
    );
  }

  setARLanguage() {
    this.setState(
      {
        ENSelected: false,
        ARSelected: true,
      },
      () => {
        const data = { lang: "ar" };
        this.updatelangData(data);
      }
    );
  }
  
  async updatelangData(data) {
    const { selectedLanguage } = this.props;
    await this.props?.updateAppLanguage(data);
    let setLang = "mx";
    if (
      selectedLanguage &&
      selectedLanguage.lang &&
      selectedLanguage.lang === "en"
    ) {
      setLang = "en";
    }
    Constants.i18n.setLanguage(setLang);
  }


  renderlangBtn() {
    const { ARSelected, ENSelected } = this.state;
    return (
      <View style={WelcomeStyles.languageSwitchMainView}>
        <TouchableOpacity
          style={
            ARSelected ? WelcomeStyles.selectedBtn : WelcomeStyles.langBtnMainView
          }
          onPress={() => this.setARLanguage()}
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
          onPress={() => this.setENLanguage()}
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
  render() {
    const {
      navigation: { navigate },
      selectedLanguage,
    } = this.props;

    const {
      common: {
      LoginBtnTitle,
       signupBtnTitle,
      },
    } = Constants.i18n;

    return (
      <View style={WelcomeStyles.container}>
            {this.renderlangBtn()}
        <View style={WelcomeStyles.content}>
          <Image
            resizeMode="contain"
            source={Constants.Images.logo}
            style={WelcomeStyles.logoStyle}
          />
          <Button
            onPress={() => navigate('Signup')}
            style={WelcomeStyles.buttonStyle}
            title={signupBtnTitle}
          />
          <Button
            onPress={() => navigate('Login')}
            style={WelcomeStyles.buttonStyle}
            title={LoginBtnTitle}
          />
        </View>
      </View>
    );
  }
}

// export default Welcome;

ReactMixin(Welcome.prototype, TimerMixin);

export default connect(
  ({ language: { selectedLanguage } }) => ({
    selectedLanguage,
  }),
  {
    updateAppLanguage: updateLanguageActions.updateLanguage,
  }
)(Welcome);