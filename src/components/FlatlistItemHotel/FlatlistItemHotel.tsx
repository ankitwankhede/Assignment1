import { View, Text, FlatList } from 'react-native';
import { HotelSVG, LocationSVG, ClockSVG } from '../../assets/svg/index';
import { getDayFromDate, getMonthDateFromDate } from '../utils/Utils';

const FlatlistItemHotel = (data: Hotel) => {
  return (
    <View style={{ padding: 20, backgroundColor: 'white', marginTop: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignContent: 'center',
            flexDirection: 'row',
            marginVertical: 7,
            gap: 10,
          }}>
          <HotelSVG />
          <Text>{data.name}</Text>
          <ClockSVG />
          <Text style={{ color: '#A9A7A5' }}>{data.location}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            gap: 10,
            backgroundColor: '#E0E0E0',
            borderRadius: 30,
          }}>
          <LocationSVG />
          <Text style={{ color: '#747576' }}>{data.distance}</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={data.slots}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: Slot) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                borderColor: '#DDDBDA',
                borderWidth: 0.7,
                marginVertical: 5,
                marginRight: 10,
                borderRadius: 7,
              }}>
              <Text style={{ color: '#8F8E8C' }}>
                {getDayFromDate(item.date)}
              </Text>
              <Text style={{ color: '#6D6F71' }}>
                {getMonthDateFromDate(item.date)}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 5,
                  backgroundColor: '#F6D9A1',
                }}>
                {item.availableSlots}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.date}
        />
      </View>
    </View>
  );
};
export default FlatlistItemHotel;
