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
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import { resetNavigator } from '../../actions/nav-action-types';
import { AuthStyles } from '../../styles';
import { Button, TextInput } from '../../components';
import { useTranslation } from "react-i18next";

const ChangePassword = (props) => {
  const { t } = useTranslation();
  
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ oldPassword, setOldPassword ] = useState('');
  const [ password, setPassword ] = useState('');

  const oldPasswordRef = React.createRef();

  const newPasswordRef = React.createRef();

  const confirmPasswordRef = React.createRef();

  const scrollViewRef = React.createRef();

  const onSubmit = () => {
    Keyboard.dismiss();
    const {
      navigation: { dispatch },
      resetNavigator: resetNav,
    } = props;

    const enterOldPassword = t('validations.enterOldPassword')
    const enterNewPassword = t('validations.enterNewPassword')
    const invalidPassword = t('validations.invalidPassword')
    const paswordNotMatched = t('validations.paswordNotMatched')


    if (_.isEmpty(oldPassword.trim())) {
      Toast.show({ text1: enterOldPassword });

      return;
    }

    if (_.isEmpty(password.trim())) {
      Toast.show({ text1: enterNewPassword });

      return;
    }

    if (!Regex.validatePassword(password.trim())) {
      Toast.show({ text1: invalidPassword });

      return;
    }

    if (confirmPassword.trim() !== password.trim()) {
      Toast.show({ text1: paswordNotMatched });

      return;
    }

    resetNav({ route: 'Login' });
  };

  const handleScrollView = ref => {
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
            />
            <Text style={AuthStyles.textStyle}>{t('password.setNewPassword')}</Text>
            <Text style={AuthStyles.description}>{t('password.setNewPasswordHere')}</Text>
            <TextInput
              ref={oldPasswordRef}
              value={oldPassword}
              placeholder={t('password.oldPasswordText')}
              returnKeyType="next"
              secureTextEntry
              onChangeText={setOldPassword}
              // onFocus={() => {
              //   this.handleScrollView(
              //     findNodeHandle(this.oldPasswordRef.current),
              //   );
              // }}
              // onBlur={() => {
              //   this.resetScrollView(
              //     findNodeHandle(this.oldPasswordRef.current),
              //   );
              // }}
              // onSubmitEditing={() => this.newPasswordRef.current.focus()}
              maxLength={16}
            />
            <TextInput
              ref={newPasswordRef}
              value={password}
              placeholder={newPassword}
              placeholder={t('password.newPassword')}
              returnKeyType="next"
              secureTextEntry
              onChangeText={setPassword}
              // onFocus={() => {
              //   this.handleScrollView(
              //     findNodeHandle(this.newPasswordRef.current),
              //   );
              // }}
              // onBlur={() => {
              //   this.resetScrollView(
              //     findNodeHandle(this.newPasswordRef.current),
              //   );
              // }}
              // onSubmitEditing={confirmPasswordRef.current.focus()}
              maxLength={16}
            />

            <TextInput
              ref={confirmPasswordRef}
              value={confirmPassword}
              placeholder={confirm}
              placeholder={t('password.confirm')}
              returnKeyType="done"
              secureTextEntry
              onChangeText={setConfirmPassword}
              // onFocus={() => {
              //   this.handleScrollView(
              //     findNodeHandle(this.confirmPasswordRef.current),
              //   );
              // }}
              // onBlur={() => {
              //   this.resetScrollView(
              //     findNodeHandle(this.confirmPasswordRef.current),
              //   );
              // }}
              onSubmitEditing={onSubmit}
              maxLength={16}
            />

            <Button
              onPress={onSubmit}
              style={AuthStyles.buttonStyle}
              title={t('password.savePassword')}
            />
          </ScrollView>
        </View>
      </View>
    );
  }

ReactMixin(ChangePassword.prototype, TimerMixin);

ChangePassword.propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      goBack: func.isRequired,
    }).isRequired,
    resetNavigator: func.isRequired,
  };

export default connect(
  null,
  { resetNavigator },
)(ChangePassword);
