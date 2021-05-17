import React, { useState } from "react";
import {
  Keyboard,
  findNodeHandle,
  View,
  Image,
  ScrollView,
  Text,
  Platform,
} from 'react-native';
import _ from 'lodash';
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import Toast from 'react-native-toast-message'
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import { AuthStyles } from '../../styles';
import { Button, TextInput } from '../../components';
import { useTranslation } from "react-i18next";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
 
  const [email, setEmail ] = useState('')

  const emailRef = React.createRef();

  const scrollViewRef = React.createRef();

  const onSubmit = () => {
    Keyboard.dismiss();
    const {
      navigation: { dispatch,navigate },
    } = props;
    
    const enterEmail = t('validations.enterEmail')
    const enterValidEmail = t('validations.enterValidEmail')
   

    if (_.isEmpty(email.trim())) {
      Toast.show({ text1: enterEmail });

      return;
    }

    if (!Regex.validateEmail(email.trim())) {
      Toast.show({ text1: enterValidEmail });

      return;
    }

    // call restfull api
    navigate('Login')
  };

    return (
      <View style={AuthStyles.container}>
        <View style={AuthStyles.content}>
          <ScrollView
            // ref={this.scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            <Image
              source={Constants.Images.logo}
              style={AuthStyles.logoStyle}
              resizeMode='contain'
            />
            <Text style={AuthStyles.textStyle}>{t('common.forgotPass')}</Text>
            <Text style={AuthStyles.description}>{t('forgotPass.desciption')}</Text>
            <TextInput
              ref={emailRef}
              value={email}
              placeholder={t('common.emailAddress')}
              returnKeyType="done"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <Button
              onPress={onSubmit}
              style={AuthStyles.buttonStyle}
              title={t('forgotPass.sendLink')}
            />
          </ScrollView>
        </View>
      </View>
    );
  }

ReactMixin(ForgotPassword.prototype, TimerMixin);

ForgotPassword.propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      goBack: func.isRequired,
    }).isRequired,
  };


export default ForgotPassword;
