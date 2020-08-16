import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIphoneX} from './isIPhoneX';
import Colors from '../colors';
let {height, width} = Dimensions.get('window');

height -= Platform.OS == 'ios' ? (isIphoneX() ? 70 : 20) : 24;
const defaultHeight = 812;
const defaultWidth = 375;
const scale = height / defaultHeight;

const normalize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const VerticalSize = (size = defaultHeight) => (size / defaultHeight) * height;
const HorizontalSize = (size = defaultWidth) => (size / defaultWidth) * width;
const createShadow = (
  number = 5,
  opacity = 0.2,
  offset = {height: 5},
  color = Colors.Shadow,
  backgroundColor = 'white',
) => {
  return {
    elevation: number,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowColor: color,
    backgroundColor,
  };
};
export default {
  Radius: VerticalSize(10),
  LightRadius: VerticalSize(6),
  ActiveOpacity: 0.5,
  customFontSize: normalize,
  FontRegular: normalize(16),
  FontExtraSmall: normalize(12),
  FontSmallest: normalize(10),
  FontSmall: normalize(14),
  FontMedium: normalize(18),
  FontLarge: normalize(22),
  VerticalSize,
  HorizontalSize,
  createShadow,
  defaultHeight,
  defaultWidth,
};
