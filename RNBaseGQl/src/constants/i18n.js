/* eslint-disable filenames/match-exported */
import LocalizedStrings from "react-native-localization";

const i18n = new LocalizedStrings({ 
  
  en: {
  
    common: {
    backToLogin: 'BACK TO LOGIN',
    done: 'Done',
    emailAddress: 'Email',
    facebook: 'Facebook',
    forgotPass: 'Forgot Password',
    fullName: 'Full name',
    mailConfirmation: 'with confirmation',
    mailSent: 'We just sent an email to \n',
    no: 'No',
    or: 'Or',
    password: 'Password',
    phone: 'Phone Number',
    resendMail: 'Resent the mail',
    save: 'SAVE',
    success: 'Success',
    twitter: 'Twitter',
    yes: 'Yes',
    signupBtnTitle:'Signup',
    LoginBtnTitle: 'Login'
  },
  forgotPass: {
    desciption: 'Enter your email below and we will send you reset link.',
    sendLink: 'SEND RESET LINK',
  },
  login: {
    createAccount: 'CREATE NEW ACCOUNT?',
    login: 'Login',
  },
  networkError:
    'Please check your internet connectivity or our server is not responding.',
  password: {
    confirm: 'Confrim Password',
    newPassword: 'New Password',
    oldPasswordText: 'Old Password',
    savePassword: 'SAVE PASSWORD',
    setNewPassword: 'Set New Password',
    setNewPasswordHere: 'Set your new password here',
  },
  signup: {
    alreadyUser: 'ALREADY HAVE AN ACCOUNT?',
    createAccount: 'CREATE ACCOUNT?',
  },
  validations: {
    enterEmail: 'Please enter email address.',
    enterNewPassword: 'Please enter new password.',
    enterOldPassword: 'Please enter your password.',
    enterPassword: 'Please enter password.',
    enterPhone: 'Please enter phone number',
    enterValidEmail: 'Please enter a valid email address.',
    invalidName:
      'Name should be 3-15 characters long and name field should contains only alphabets.',
    invalidPassword:
      'Invalid password, password should contain one alphabet and number and must be 6-16 character long.',
    invalidPhone: 'Please enter a valid phone number.',
    paswordNotMatched: 'Password does not match.',
  },
},

ar: {
  
  common: {
  backToLogin: 'BACK TO LOGIN',
  done: 'Done',
  emailAddress: 'بريد إلكتروني',
  facebook: 'Facebook',
  forgotPass: 'هل نسيت كلمة السر',
  fullName: 'Full name',
  mailConfirmation: 'with confirmation',
  mailSent: 'We just sent an email to \n',
  no: 'No',
  or: 'أو',
  password: 'كلمه السر',
  phone: 'Phone Number',
  resendMail: 'Resent the mail',
  save: 'SAVE',
  success: 'Success',
  twitter: 'Twitter',
  yes: 'Yes',
  signupBtnTitle:'اشتراك',
  LoginBtnTitle:'اشتراك'
},
forgotPass: {
  desciption: 'Enter your email below and we will send you reset link.',
  sendLink: 'SEND RESET LINK',
},
login: {
  createAccount: 'انشاء حساب جديد؟',
  login: 'اشتراك',
},
networkError:
  'Please check your internet connectivity or our server is not responding.',
password: {
  confirm: 'Confrim Password',
  newPassword: 'New Password',
  oldPasswordText: 'Old Password',
  savePassword: 'SAVE PASSWORD',
  setNewPassword: 'Set New Password',
  setNewPasswordHere: 'Set your new password here',
},
signup: {
  alreadyUser: 'هل لديك حساب؟',
  createAccount: 'انشاء حساب جديد؟',
},
validations: {
  enterEmail: 'Please enter email address.',
  enterNewPassword: 'Please enter new password.',
  enterOldPassword: 'Please enter your password.',
  enterPassword: 'Please enter password.',
  enterPhone: 'Please enter phone number',
  enterValidEmail: 'Please enter a valid email address.',
  invalidName:
    'Name should be 3-15 characters long and name field should contains only alphabets.',
  invalidPassword:
    'Invalid password, password should contain one alphabet and number and must be 6-16 character long.',
  invalidPhone: 'Please enter a valid phone number.',
  paswordNotMatched: 'Password does not match.',
},
}
})

module.exports = i18n;
