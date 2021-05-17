import React, { useState } from "react";
import {
  Keyboard,
  findNodeHandle,
  View,
  Image,
  ScrollView,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import Toast from 'react-native-toast-message';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import { connect } from 'react-redux';
import { AuthStyles } from '../../styles';
import { Button, TextInput } from '../../components';
import i18n from '../../constants/i18n';
import { useTranslation } from "react-i18next";

const Signup = (props)=> {
  const { t } = useTranslation();

  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const emailRef = React.createRef();

  const passwordRef = React.createRef();

  const scrollViewRef = React.createRef();

  const onSubmit = () => {
    Keyboard.dismiss();
  
    const {
      navigation: { dispatch, navigate },
    } = props;
    const enterEmail = t('validations.enterEmail')
    const enterValidEmail = t('validations.enterValidEmail')
    const enterPassword = t('validations.enterPassword')
    const invalidPassword = t('validations.invalidPassword')

    if (_.isEmpty(email.trim())) {
      Toast.show({ text1: enterEmail });

      return;
    }

    if (!Regex.validateEmail(email.trim())) {
      Toast.show({ text1: enterValidEmail });

      return;
    }

    if (_.isEmpty(password.trim())) {
      Toast.show({ text1: enterPassword});

      return;
    }

    if (!Regex.validatePassword(password.trim())) {
      Toast.show({ text1:invalidPassword});

      return;
    }

    navigate('Dashboard');
  };

  const handleScrollView = ref => {
    // const context = this;
    const scrollResponder = scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        ref,
        (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 20,
        true,
      );
    }, 300);
  };

  const resetScrollView = ref => {
    const scrollResponder = scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(ref, 0, true);
    }, 300);
  };
  const  { navigation: { navigate } } = props;
    

    return (
      <View style={AuthStyles.container}>
        <View style={AuthStyles.content}>
          <ScrollView
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            <Image
              source={Constants.Images.logo}
              style={AuthStyles.logoStyle}
              resizeMode='contain'
            />
            <TextInput
              container={AuthStyles.signupTextInputContainer}
              ref={emailRef}
              value={email}
              placeholder={t('common.emailAddress')}
              returnKeyType="next"
              onChangeText={setEmail}
              // onFocus={() => {
              //   this.handleScrollView(findNodeHandle(emailRef.current));
              // }}
              // onBlur={() => {
              //   this.resetScrollView(findNodeHandle(this.emailRef.current));
              // }}
              // onSubmitEditing={passwordRef.current.focus()}
            />
            <TextInput
              ref={passwordRef}
              value={password}
              placeholder={t('common.password')}
              returnKeyType="done"
              secureTextEntry
              maxLength={16}
              onChangeText={setPassword}
              // onFocus={() => {
              //   handleScrollView(findNodeHandle(this.passwordRef.current));
              // }}
              // onBlur={() => {
              //   this.resetScrollView(findNodeHandle(this.passwordRef.current));
              // }}
              onSubmitEditing={onSubmit}
            />
            <Button
              onPress={onSubmit}
              style={AuthStyles.buttonStyle}
              title={t('signup.createAccount')}
            />
            <Text style={AuthStyles.sepratorStyle}>{t('common.or')}</Text>
            <TouchableOpacity
              hitSlop={Constants.BaseStyle.HIT_SLOP}
              onPress={() => navigate('Login')}
              activeOpacity={0.9}>
              <Text style={AuthStyles.textDecorationLineStyle}>
              {t('signup.alreadyUser')}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
  Signup.propTypes = {  
    navigation: shape({
    dispatch: func.isRequired,
    goBack: func.isRequired,
    navigate: func.isRequired,
  }).isRequired,
};


ReactMixin(Signup.prototype, TimerMixin);

const mapStateToProps = ({ user: { deviceToken },
  language: { selectedLanguage }
}) => ({ deviceToken, selectedLanguage });

export default connect(mapStateToProps)(Signup);
