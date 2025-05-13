import {View, Text, FlatList} from 'react-native';
import {HotelSVG, LocationSVG, ClockSVG} from '../../assets/svg/index';
import {getDayFromDate, getMonthDateFromDate} from '../utils/Utils';
import Styles from './FlatlistItemHotelStyles';

const FlatlistItemHotel = (data: Hotel) => {
  return (
    <View style={{padding: 20, backgroundColor: 'white', marginTop: 10}}>
      <View style={Styles.topRow}>
        <View style={Styles.topRowFirstCol}>
          <HotelSVG />
          <Text>{data.name}</Text>
          <ClockSVG />
          <Text style={{color: '#A9A7A5'}}>{data.location}</Text>
        </View>
        <View style={Styles.topRowSecondCol}>
          <LocationSVG />
          <Text style={{color: '#747576'}}>{data.distance}</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={data.slots}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: Slot) => (
            <View style={Styles.bottomRowFlatlistItem}>
              <Text style={{color: '#8F8E8C'}}>
                {getDayFromDate(item.date)}
              </Text>
              <Text style={{color: '#6D6F71'}}>
                {getMonthDateFromDate(item.date)}
              </Text>
              <Text style={Styles.bottomRowFlatlistItemSlot}>
                {item.availableSlots}
              </Text>
            </View>
          )}
          keyExtractor={item => item.date}
        />
      </View>
    </View>
  );
};
export default FlatlistItemHotel;
