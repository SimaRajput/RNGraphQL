import { Platform } from 'react-native';
import { moderateScale } from '../utilities/responsive-fonts';

const Fonts = {
  extraLarge: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Regular',
    fontSize: moderateScale(18),
  },
  extraLargeBold: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Bold',
    fontSize: moderateScale(18),
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Regular',
    fontSize: moderateScale(20),
  },
  headerBold: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Bold',
    fontSize: moderateScale(20),
  },
  large: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Regular',
    fontSize: moderateScale(16),
  },
  largeBold: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Bold',
    fontSize: moderateScale(16),
  },
  regular: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Regular',
    fontSize: moderateScale(14),
  },
  regularBold: {
    fontFamily: Platform.OS === 'ios' ? undefined : 'OpenSans-Bold',
    fontSize: moderateScale(14),
  },
};

module.exports = Fonts;
