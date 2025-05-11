import { View, Text, FlatList, ToastAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import FlatlistItemHotel from '../FlatlistItemHotel/FlatlistItemHotel';

export default function Meetup() {
  const [hotels, setHotels] = useState<Array<Hotel>>();
  let fetchTimeout: NodeJS.Timeout;
  const fetchAbortContoller: AbortController = new AbortController();

  useEffect(() => {
    fetchMeetup();
  }, []);

  const fetchMeetup = async () => {
    fetchTimeout = setTimeout(() => {
      clearTimeout(fetchTimeout);
      fetchAbortContoller.abort();
    }, 15000);
    try {
      let res = await fetch(
        'https://mocki.io/v1/1e0ded6b-ba02-48c0-a636-ec92291f0b4a',
        { signal: fetchAbortContoller.signal }
      );
      let data: Array<Hotel> = await res.json();
      setHotels(data);
    } catch (err) {
      ToastAndroid.show('Request error', ToastAndroid.SHORT);
    } finally {
      clearTimeout(fetchTimeout);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E0E0E0' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Open Times</Text>
      </View>
      <FlatList
        data={hotels}
        renderItem={({ item }: Hotel) => <FlatlistItemHotel {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
