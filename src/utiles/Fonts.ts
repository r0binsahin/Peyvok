import {Platform} from 'react-native';

export const Fonts = {
  QSBold: Platform.OS === 'ios' ? 'Quicksand-Bold' : 'Quicksand-Bold.ttf',

  QSRegular:
    Platform.OS === 'ios' ? 'Quicksand-Regular' : 'Quicksand-Regular.ttf',

  QSSemiBold:
    Platform.OS === 'ios' ? 'Quicksand-SemiBold' : 'Quicksand-SemiBold.ttf',

  QSMedium: Platform.OS === 'ios' ? 'Quicksand-Medium' : 'Quicksand-Medium.ttf',

  QSLight: Platform.OS === 'ios' ? 'Quicksand-Light' : 'Quicksand-Light.ttf',
};
