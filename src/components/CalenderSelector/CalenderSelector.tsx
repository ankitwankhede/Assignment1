import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Styles from './CalenderSelectorStyle';
import {LeftArrowSVG, RightArrowSVG} from '../../assets/svg';
import {getNewDate} from '../utils/Utils';
import {useState} from 'react';

const CalenderSelector = () => {
  const [addNum, setAddNum] = useState<number>(0);

  const onLeftPress = () => {
    if (addNum != 0) {
      setAddNum(prevState => prevState - 1);
    } else {
      ToastAndroid.show('Can not select previous date', ToastAndroid.SHORT);
    }
  };

  const onRightPress = () => {
    setAddNum(prevState => prevState + 1);
  };

  return (
    <View style={Styles.middleBtnRow}>
      <TouchableOpacity onPress={onLeftPress}>
        <LeftArrowSVG />
      </TouchableOpacity>

      <View>
        <Text>
          {getNewDate(addNum)} - {getNewDate(5 + addNum)}
        </Text>
      </View>

      <TouchableOpacity onPress={onRightPress}>
        <RightArrowSVG />
      </TouchableOpacity>
    </View>
  );
};
export default CalenderSelector;
