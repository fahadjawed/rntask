import {DarkTheme} from '@react-navigation/native';

const Colors = {
  colors: {
    WhiteOpacity: (opacity = '0.5') => `rgba(255, 255, 255, ${opacity})`,
    BlackOpacity: (opacity = '0.5') => `rgba(0, 0, 0, ${opacity})`,
    PlaceHolder: (opacity = '0.7') => `rgba(35, 38, 50, ${opacity})`,
    Transparent: 'transparent',
    TextColorOpacity: (opacity = 0.15) => `rgba(64, 81, 78, ${opacity})`,
    DisabledColor: '#2326320C',
    DisabledGrey: '#E5E6EB',
    White: 'white',
    ...DarkTheme.colors,
  },
};

export default Colors;
